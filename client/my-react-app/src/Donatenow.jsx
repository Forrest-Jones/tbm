import React from "react";
import { Link } from "react-router-dom"; // import the Link component from react-router-dom
import "./Donatenow.css";

function Donatenow() {
  return (
    <div className="donate-now-page">
      <h1>Donate Now Through GYVE App</h1>
      <p>
        Thank you for choosing to support Christian organizations using The Blessing Machine! To make your donation, please follow these simple steps:
      </p>
      <ol>
        <li>Download the GYVE app on your mobile device from the <a href="https://apps.apple.com">App Store</a> (iOS) or <a href="https://play.google.com">Google Play</a> (Android).</li>
        <li>Create an account or log in to your existing GYVE account.</li>
        <li>Search for the Christian organization you'd like to support.</li>
        <li>Select the organization and enter the donation amount.</li>
        <li>Choose one-time or recurring donation, and complete the payment process.</li>
      </ol>
      <p>
        Your donation will make a significant impact on the Christian organization you choose to support. Thank you for your generosity!
      </p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Donatenow;
