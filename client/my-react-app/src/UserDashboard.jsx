import React from "react";

function UserDashboard({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>Notification Center</h2>
      <p>You have no new notifications.</p>
      <h2>Help and Support</h2>
      <p>Visit our Help Center and check out the FAQ section below for the answers to some common questions we get allot.</p>
      <p>Contact customer support for additional assistance.</p>

      <h2>Frequently Asked Questions for Those New to the Platform</h2>
      <p><strong>What is The Blessing Machine?</strong></p>
      <p>The Blessing Machine is a non-profit donation platform tailored specifically for Christian organizations aimed at revolutionizing the way they raise and manage funds.</p>
      <p><strong>What technologies does The Blessing Machine use?</strong></p>
      <p>The Blessing Machine uses advanced technologies like JavaScript React to build the frontend, Python Flask to build out the backend, and OpenAI's ChatGPT API to handle administrative follow tasks.</p>
      <p><strong>How does The Blessing Machine simplify the donation process?</strong></p>
      <p>The Blessing Machine offers a seamless donation process for donors, with options for one-time or recurring donations, secure user account management, including personal information, donation history, tax-deductible receipts, and comprehensive organization profiles that showcase goals, achievements, and financial needs.</p>
      <p><strong>How does The Blessing Machine ensure efficient endowment management?</strong></p>
      <p>The Blessing Machine implements an endowment management system with investment insights and recommendations for the Organizations that are on the platform. You can learn more about this on the Organization Profile pages.</p>
      <p><strong>How can I get started with The Blessing Machine?</strong></p>
      <p>To get started with The Blessing Machine, you can visit the platform's website, create a user account, and start exploring the available Christian organizations to donate to.</p>
    </div>
  );
}

export default UserDashboard;
