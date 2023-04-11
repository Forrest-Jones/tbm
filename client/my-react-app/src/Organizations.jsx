import React, { useState, useEffect } from "react";
import "./Organizations.css";

function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const response = await fetch("/api/organizations");
      const data = await response.json();
      setOrganizations(data);
    };
    fetchOrganizations();
  }, []);

  const handleOrganizationClick = async (id) => {
    const response = await fetch(`/api/organizations/${id}`);
    const data = await response.json();
    setSelectedOrganization(data);
  };

  const handleDeleteOrganization = async (id) => {
    await fetch(`/api/organizations/${id}`, {
      method: "DELETE",
    });
    setOrganizations(organizations.filter((organization) => organization.id !== id));
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
        </div>
      )}
    </div>
  );
}

export default Organizations;
