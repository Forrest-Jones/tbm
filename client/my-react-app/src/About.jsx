import React from "react";
import './globalStyles.css';
import { Link } from "react-router-dom"; // import the Link component from react-router-dom

function About() {
  return (
    <div className="about-page">
      <h1>About The Blessing Machine</h1>

      <h2>Executive Summary</h2>
      <p>
        The Blessing Machine is a groundbreaking non-profit donation platform, tailored specifically for Christian organizations, aimed at revolutionizing the way they raise and manage funds. By harnessing advanced technologies like Artificial Intelligence and Machine Learning this innovative platform streamlines the fundraising process, offers a user-friendly experience for donors, and ensures efficient endowment management for beneficiary organizations. The Blessing Machine is poised to reshape the fundraising landscape for Christian organizations, guaranteeing their long-term sustainability and growth.
      </p>

      <h2>Background</h2>
      <p>
        Christian organizations often face challenges in securing adequate funds to support their missions through traditional fundraising methods, which can be costly, time-consuming, and ineffective in reaching the right audience. The Blessing Machine addresses these challenges by developing a technologically advanced platform tailored to the unique needs of Christian organizations.
      </p>

      <h2>Objective</h2>
      <p>
        The primary objective of The Blessing Machine is to create an efficient and cutting-edge fundraising platform that simplifies the donation process for Christian organizations, enhances endowment management, and maximizes the impact of donor contributions.
      </p>

      <h2>Solution</h2>
      <p>
        The Blessing Machine will integrate advanced technologies and industry best practices to create a state-of-the-art fundraising platform. The solution will:
      </p>
      <ul>
        <li>Offer a seamless donation process for donors, with options for one-time or recurring donations.</li>
        <li>Provide comprehensive organization profiles that showcase goals, achievements, and financial needs.</li>
        <li>Enable secure user account management, including personal information, donation history, and tax-deductible receipts.</li>
        <li>Utilize AI-generated content for organization profiles, success stories, and personalized donor communications.</li>
        <li>Implement an endowment management system with investment insights and recommendations.</li>
      </ul>

      <h2>Deliverables and Success Criteria</h2>
      <ul>
        <li>Launch of The Blessing Machine platform with full functionality for donors and organizations within ninety days.</li>
        <li>A minimum of 10 Christian organizations will be onboarded within the first 6 months of operation.</li>
        <li>A 25% increase in donations for participating organizations within the first year of implementation.</li>
        <li>Positive user feedback and testimonials from both donors and organizations will be sought after and recorded on the site.</li>
        <li>Successful integration of AI-generated content and investment insights will be integrated within ninety days.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The Blessing Machine is set to revolutionize the fundraising landscape for Christian organizations by leveraging cutting-edge technologies and providing a tailored solution. This platform will simplify the donation process, improve endowment management, and maximize donor contributions. The Blessing Machine will empower Christian organizations to achieve their missions, secure their financial future, and create lasting, positive change in their communities for Christ.
      </p>

      <div className="donate-button">
        <Link to="/donatenow">Donate Now! via the BlessingMachine App</Link>
        </div>
      </div>


  );
}

export default About;
