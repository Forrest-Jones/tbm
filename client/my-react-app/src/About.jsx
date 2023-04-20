import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-page">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/pexels-emirkhan-bal-4824781-3840x2160-30fps.mp4" type="video/mp4" />
      </video>
      <h1 className="glass">About The Blessing Machine</h1>

      <h2 className="glass">Executive Summary</h2>
      <p className="glass">
        The Blessing Machine is a groundbreaking non-profit donation platform, tailored specifically for Christian organizations, aimed at revolutionizing the way they raise and manage funds. By harnessing advanced technologies like Artificial Intelligence and Machine Learning this innovative platform streamlines the fundraising process, offers a user-friendly experience for donors, and ensures efficient endowment management for beneficiary organizations. The Blessing Machine is poised to reshape the fundraising landscape for Christian organizations, guaranteeing their long-term sustainability and growth.
      </p>

      <h2 className="glass">Background</h2>
      <p className="glass">
        Christian organizations often face challenges in securing adequate funds to support their missions through traditional fundraising methods, which can be costly, time-consuming, and ineffective in reaching the right audience. The Blessing Machine addresses these challenges by developing a technologically advanced platform tailored to the unique needs of Christian organizations.
      </p>

      <h2 className="glass">Objective</h2>
      <p className="glass">
        The primary objective of The Blessing Machine is to create an efficient and cutting-edge fundraising platform that simplifies the donation process for Christian organizations, enhances endowment management, and maximizes the impact of donor contributions.
      </p>

      <h2 className="glass">Solution</h2>
      <p className="glass">
        The Blessing Machine will integrate advanced technologies and industry best practices to create a state-of-the-art fundraising
     </p>
      </div>
  );
}

export default About;