import React, { useState, useEffect } from "react";
import "./Organizations.css";

function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const response = await fetch("/organizations");
      const data = await response.json();
      setOrganizations(data);
    };
    fetchOrganizations();
  }, []);

  const handleOrganizationClick = async (id) => {
    const response = await fetch(`/organizations/${id}`);
    const data = await response.json();
    setSelectedOrganization(data);
  };

  const handleDeleteOrganization = async (id) => {
    await fetch(`/organizations/${id}`, {
      method: "DELETE",
    });
    setOrganizations(organizations.filter((organization) => organization.id !== id));
    setSelectedOrganization(null); // reset selected organization if it was deleted
  };

  const handleUpdateOrganization = async (id, updatedData) => {
    await fetch(`/organizations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    // Refresh the organization list and the selected organization
    const response = await fetch(`/organizations/${id}`);
    const data = await response.json();
    setSelectedOrganization(data);
    const updatedOrganizations = organizations.map((org) => org.id === id ? {...org, ...updatedData} : org);
    setOrganizations(updatedOrganizations);
  };

  const handleCreateOrganization = async (newData) => {
    const response = await fetch('/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    setSelectedOrganization(data);
    setOrganizations([...organizations, {...newData, id: data.id}]);
  };

  return (
    <div>
      <h1>Organizations</h1>
      <div className="organizations-list">
        {organizations.map((organization) => (
          <div key={organization.id} className="organization">
            <img src={organization.logo} alt={`${organization.name} logo`} onClick={() => handleOrganizationClick(organization.id)} />
            <h3>{organization.name}</h3>
            <p>{organization.tagline}</p>
            <div className="buttons-row">
              <button className="learn-more" onClick={() => console.log("Learn More button clicked")}>
                Learn More
              </button>
              <button className="donate-now" onClick={() => console.log("Donate Now Through the GYVE APP button clicked")}>
                Donate Now Through the GYVE APP
              </button>
              <button className="go-back-home" onClick={() => console.log("Go Back Home button clicked")}>
                Go Back Home
              </button>
            </div>
            <button className="delete-organization" onClick={() => handleDeleteOrganization(organization.id)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedOrganization && (
  <div className="selected-organization">
    <img src={selectedOrganization.logo} alt={`${selectedOrganization.name} logo`} />
    <h2>{selectedOrganization.name}</h2>
    <p>{selectedOrganization.description}</p>
    <button className="update-organization" onClick={() => handleUpdateOrganization(selectedOrganization.id, {name: 'New Name'})}>Update</button>
  </div>
)}
<div>
  <OrganizationForm onSubmit={(newData) => handleCreateOrganization(newData)} />
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

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Organization</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="tagline">Tagline:</label>
      <input type="text" id="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
      <label htmlFor="logo">Logo:</label>
      <input type="text" id="logo" value={logo} onChange={(e) => setLogo(e.target.value)} />
      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}

export default Organizations;
