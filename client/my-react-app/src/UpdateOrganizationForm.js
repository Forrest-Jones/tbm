import React, { useState } from 'react';


function UpdateOrganizationForm({ organization, onUpdate, onCancel }) {
    const [name, setName] = useState(organization.name);
    const [tagline, setTagline] = useState(organization.tagline);
    const [logo, setLogo] = useState(organization.logo);
    const [description, setDescription] = useState(organization.description);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onUpdate(organization.id, { name, tagline, logo, description });
      onCancel();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <label htmlFor="logo">Logo:</label>
        <input
          type="text"
          id="logo"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    );
  }
  export default UpdateOrganizationForm;
