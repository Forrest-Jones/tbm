import React, { useState, useEffect } from "react";
import axios from "axios";

function LearnMore() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    // Fetch organization data from backend using axios
    axios
      .get("/api/organizations")
      .then((response) => {
        setOrganizations(response.data[0].rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Christian Organizations</h1>
      <p>Learn more about the following organizations:</p>
      <ul>
        {organizations.map((org) => (
          <li key={org[0]}>
            <h2>{org[1]}</h2>
            <img src={org[2]} alt={org[1]} />
            <p>{org[3]}</p>
            <p>
              <strong>Goals: </strong>
              {org[4]}
            </p>
            <p>
              <strong>Achievements: </strong>
              {org[5]}
            </p>
            <p>
              <strong>Financial Needs: </strong>
              {org[6]}
            </p>
            <p>{org[7]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LearnMore;
