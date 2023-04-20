import { useState, useEffect } from 'react';
import stockImage from './stockImages/Jesus-image.jpg';
import UpdateOrganizationForm from './UpdateOrganizationForm';
import "./Organizations.css";

const BASE_URL = "http://127.0.0.1:5000";

function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const bgVideoUrl = "/videos/pexels-emirkhan-bal-4824781-3840x2160-30fps.mp4";

  useEffect(() => {
    const fetchOrganizations = async () => {
      const response = await fetch(`${BASE_URL}/organizations`);
      const data = await response.json();
      setOrganizations(data);
    };
    fetchOrganizations();
  }, []);

  const handleOrganizationClick = async (id) => {
    const response = await fetch(`${BASE_URL}/organizations/${id}`);
    const data = await response.json();
    setSelectedOrganization(data);
    setIsUpdateSuccess(false); // Reset the update success flag
  };

  const handleDeleteOrganization = async (id) => {
    await fetch(`${BASE_URL}/organizations/${id}`, {
      method: "DELETE",
    });
    setShowUpdateForm(false); // Close the update form
    setIsUpdateSuccess(false); // Reset the update success flag
  };

  const handleUpdateOrganization = async (id, updatedData) => {
    await fetch(`${BASE_URL}/organizations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const response = await fetch(`${BASE_URL}/organizations/${id}`);
    const updatedOrganization = await response.json();
    setSelectedOrganization(updatedOrganization);

    const updatedOrganizations = organizations.map((org) =>
      org.id === id ? { ...org, ...updatedData } : org
    );
    setOrganizations(updatedOrganizations);
    setShowUpdateForm(false); // Close the update form
    setIsUpdateSuccess(true); // Set the update success flag
  };

  const handleCreateOrganization = async (newData) => {
    const response = await fetch(`${BASE_URL}/organizations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    setSelectedOrganization(data);
    setOrganizations([{ ...newData, id: data.id }, ...organizations]);
  };

  return (
    <div className="background">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideoUrl} type="video/mp4" />
      </video>
      <div className="organization-cards-wrapper">
        <div className="card">
          <div className="innercard">
            <div>
              <OrganizationForm onSubmit={(newData) => handleCreateOrganization(newData)} />
            </div>
            <h1>Organizations</h1>
            <div className="organizations-list">
              {organizations.map((organization) => (
                <div key={organization.id} className="organization-card">
                  <div className="organization-card-content">
                    <img
                      className="organization-logo"
                      src={organization.logo ? organization.logo : stockImage}
                      alt={`${organization.name} logo`}
                      onClick={() => handleOrganizationClick(organization.id)}
                    />
                    <h3 className="organization-name">{organization.name}</h3>
                    <p className="organization-tagline">{organization.tagline}</p>
                  </div>
                  <div className="buttons-row">
                  </div>
                  <button className="delete-organization" onClick={() => handleDeleteOrganization(organization.id)}>Delete</button>
                </div>
              ))}
            </div>
            {selectedOrganization && (
              <div className="selected-organization">
                {showUpdateForm ? (
                  <UpdateOrganizationForm
                    organization={selectedOrganization}
                    onUpdate={handleUpdateOrganization}
                    onCancel={() => setShowUpdateForm(false)}
                  />
                ) : (
                  <>
                    <img src={selectedOrganization.logo} alt={`${selectedOrganization.name} logo`} />
                    <h2>{selectedOrganization.name}</h2>
                    <p>{selectedOrganization.description}</p>
                    <div className="button-container">
                      <button className="update-organization" onClick={() => setShowUpdateForm(true)}>Update Organization Info Here!</button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  }
  function OrganizationForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [logo, setLogo] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ name, tagline, logo, description });
      setName("");
      setTagline("");
      setLogo("");
      setDescription("");
    };
  
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSubmit(event);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Add an organization to The Blessing Machine platform 
            by filling out the form below. The TBM staff will 
            review each entry and reach out to the organization
            to qualify them as recipient of The Blessing Machine 
            Endowment Fund.
        </h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <label htmlFor="logo">Logo:</label>
        <input
          type="text"
          id="logo"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default Organizations;
  



