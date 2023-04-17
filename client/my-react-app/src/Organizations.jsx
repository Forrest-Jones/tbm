import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import stockImage from './stockImages/Jesus-image.jpg';
import UpdateOrganizationForm from './UpdateOrganizationForm';

const BASE_URL = "http://127.0.0.1:5000";

function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  
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
  };

  const handleDeleteOrganization = async (id) => {
    await fetch(`${BASE_URL}/organizations/${id}`, {
      method: "DELETE",
    });
    };
  

  const handleUpdateOrganization = async (id, updatedData) => {
    await fetch(`${BASE_URL}/organizations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // send updated data to server
    });

    // fetch updated organization from server
    const response = await fetch(`${BASE_URL}/organizations/${id}`);
    const updatedOrganization = await response.json();

    // update selected organization in state
    setSelectedOrganization(updatedOrganization);

    // update organizations list in state
    const updatedOrganizations = organizations.map((org) =>
      org.id === id ? { ...org, ...updatedData } : org
    );
    setOrganizations(updatedOrganizations);
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
  <div>
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
            <button className="learn-more">
              <Link to={`/organizations/${organization.id}/learnmore`}>Learn More</Link>
            </button>
            <button className="donate-now">
              <Link to={`/organizations/${organization.id}/donatenow`}>Donate Now! via the Blessing Machine APP!</Link>
            </button>
            <button className="go-back-home" onClick={() => console.log("Go Back Home button clicked")}>
              Back to Home
            </button>
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
);




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
      <h3>Add your organization to our platform by filling out the form below or browse the current organizations that have already signed up to be with us.</h3>
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
}
export default Organizations;

