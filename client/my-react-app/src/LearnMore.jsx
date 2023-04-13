import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./LearnMore.module.css";

function LearnMore() {
  const [organization, setOrganization] = useState(null);
  const { id } = useParams(); // Get the organization id from the URL

  useEffect(() => {
    async function fetchOrganization() {
      try {
        const response = await fetch(`http://localhost:5000/organizations/${id}`); // Fetch the organization by id
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched organization data:", data); // Log the fetched data
          setOrganization(data);
        } else {
          console.error(`Error fetching organization data: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching organization data:", error);
      }
    }

    fetchOrganization();
  }, [id]);

  return (
    <div>
      <h1>Learn More</h1>
      {organization ? (
        <div className={styles["selected-organization"]}>
          <img src={organization.logo} alt={`${organization.name} logo`} />
          <h2>{organization.name}</h2>
          <p>{organization.description}</p>
          {/* Add more fields to display additional information about the organization */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LearnMore;
