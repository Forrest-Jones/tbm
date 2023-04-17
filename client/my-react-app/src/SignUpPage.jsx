import React from "react";
import { useHistory } from "react-router-dom";
import "./SignUpPage.css";

const BASE_URL = "http://127.0.0.1:5000";

function SignUpPage() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const organizationData = {
      name: event.target.name.value,
      email: event.target.email.value,
      logo: event.target.logo.value,
      tagline: event.target.tagline.value,
      goals: event.target.goals.value,
      achievements: event.target.achievements.value,
      financial_needs: event.target.financial_needs.value,
      description: event.target.description.value,
      password: event.target.password.value,
    };
  
    try {
      const response = await fetch(`${BASE_URL}/organizations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizationData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add organization');
      }
  
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to add organization');
    }
  };

  const handleHomePageClick = () => {
    history.push("/");
  };

  return (
    <div className="glass-pane">
      {/* ... */}
    </div>
  );
}

export default SignUpPage;
