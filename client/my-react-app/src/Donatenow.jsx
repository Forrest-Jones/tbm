import React from "react";
import { Link } from "react-router-dom"; 
import styles from './Donatenow.module.css';

function Donatenow() {
  return (
    <div className={styles["donate-now-page"]}>
      <div className={styles["circle-container"]}>
        <div className={`${styles.circle} ${styles["circle-1"]}`}></div>
        <div className={`${styles.circle} ${styles["circle-2"]}`}></div>
        <div className={`${styles.circle} ${styles["circle-3"]}`}></div>
        <div className={`${styles.circle} ${styles["circle-4"]}`}></div>
      </div>
      <h1>Donate Now! via the BREAD BOX App!</h1>
      <p>
        Thank you for choosing to support Christian organizations using The Blessing Machine platform! To make your donation, please follow these simple steps:
      </p>
      <ol>
        <li>Download the BREAD BOX App on your mobile device from the <a href="https://apps.apple.com">App Store</a> (iOS) or <a href="https://play.google.com">Google Play</a> (Android).</li>
        <li>Create an account or log in to your existing BREAD BOX account.</li>
        <li>Search for the Christian organization you'd like to support.</li>
        <li>Select the organization and enter the donation amount.</li>
        <li>Choose one-time or recurring donation, and complete the payment process.</li>
      </ol>
      <p>
        Your donation will make a significant impact on the Christian organization you choose to support today and forever. Thank you for your generosity!
      </p>
    </div>
  );
}

export default Donatenow;
