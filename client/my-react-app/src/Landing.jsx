import React from "react";
import { useHistory } from "react-router-dom";
import "./Landing.css";

function Landing({ user, setUser, organizations }) {
  const history = useHistory();

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  const handleLearnMoreClick = () => {
    history.push("/learnmore"); // Navigate to the Learn More page
  };
  

  return (
    <div className="homepage">
      <h1 className="title">The Blessing Machine</h1>
      <p className="description">
        Transforming Fundraising for Christian Organizations.
        <br />
        The Blessing Machine is a groundbreaking non-profit donation platform, tailored specifically for Christian organizations to raise capital for foreign and domestic missions work. It is aimed at revolutionizing the way they raise and manage funds through a dynamic platform that fosters growth and transparency. TBM accomplishes this by harnessing the power of advanced technologies like Artificial Intelligence(AI) and machine learning via partners like OpenAI through ChatGPT for admin and site coaching support, Google Brain, and DeepMind to name a few. The Blessing Machine is the premier AI supported platform that streamlines the fundraising process, offers a user-friendly, easy to navigate web experience for donors while insuring efficient, private, and secured, endowment management for the beneficiary organizations. TBM is poised to reshape the fundraising landscape for Christian organizations guaranteeing their long-term sustainability and growth as they do good work in the world.
      </p>
      <div className="cta">
        <button className="button" onClick={handleSignUpClick}>
          Sign Up
        </button>
        <button className="button" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
      <div className="image">
        <img src="images/Jesus-image.jpg" alt="Jesus Image" />
      </div>
    </div>
  );
}

export default Landing;
