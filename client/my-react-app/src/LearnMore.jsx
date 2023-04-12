import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './LearnMore.module.css';

function LearnMore() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  useEffect(() => {
    async function fetchOrganizations() {
      try {
        const response = await fetch('/api/organizations');
        const data = await response.json();
        setOrganizations(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOrganizations();
  }, []);

  const handleOrganizationClick = (id) => {
    const organization = organizations.find((org) => org.id === id);
    setSelectedOrganization(organization);
  };

  return (
    <div>
      <h1>Learn More</h1>
      <div className={styles['organization-list']}>
        {organizations.map((org) => (
          <div key={org.id} className={styles.organization} onClick={() => handleOrganizationClick(org.id)}>
            <Link to={`/organizations/${org.id}`}>
              <img src={org.logo} alt={`${org.name} logo`} />
              <h3>{org.name}</h3>
              <p>{org.tagline}</p>
            </Link>
          </div>
        ))}
      </div>
      {selectedOrganization && (
        <div className={styles['selected-organization']}>
          <img src={selectedOrganization.logo} alt={`${selectedOrganization.name} logo`} />
          <h2>{selectedOrganization.name}</h2>
          <p>{selectedOrganization.description}</p>
        </div>
      )}
      <div className={styles['my-class']}>...</div>
    </div>
  );
}

export default LearnMore;
