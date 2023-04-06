import React, { useState, useEffect } from "react";
import axios from "axios";

function LearnMore() {
  
  const organizations = [
    {
      id: 1,
      name: "Grimes Group",
      logo: "https://dummyimage.com/696x135",
      tagline: "Ameliorated secondary Graphic Interface",
      goals:
        "Tax prove fire medical side recently. Blood realize else possible kid so. Word mission tree top. Ground world including apply only mission suffer meeting. Cold his group table under build meet.",
      achievements:
        "Present whom seat rich let particularly ready finally. Certainly stay service attack ten along. Poor finish instead cover street marriage subject. Difference create bag race poor pretty operation. Energy big with same art stop.",
      financial_needs:
        "Especially next call official. As term send some. Child wind raise eight. Goal perhaps however even minute situation. Trial clear foreign during drive rest beat.",
      description:
        "Grimes Group is a Christian organization that focuses on raising capital for foreign and domestic missions work. The organization uses advanced technologies like Artificial Intelligence(AI) and machine learning via partners like OpenAI through ChatGPT for admin and site coaching support, Google Brain, and DeepMind to name a few."
    },
    {
      id: 2,
      name: "Arnold Group",
      logo: "https://picsum.photos/259/659",
      tagline: "Assimilated solution-oriented monitoring",
      goals:
        "I clear more defense a. Experience report produce common. Cause figure American wait. Relationship alone read fight community discover author. Scene study off board maintain cold rate.",
      achievements:
        "Again receive treat bag community rather expert let. Thus despite local country. Live TV site plan top. Growth line answer toward have approach.",
      financial_needs:
        "Measure go item all range first. Again series full enter finish behind resource. Few rise about trip religious around rest. Sit here author writer each help up.",
      description:
        "Arnold Group is a Christian organization that specializes in foreign and domestic missions work. The organization offers a seamless donation process for donors, with options for one-time or recurring donations, secure user account management, including personal information, donation history, and tax-deductible receipts, and comprehensive organization profiles that showcase goals, achievements, and financial needs."
    },
    // Add the remaining organizations here

    {
        id: 3,
        name: "Andrade, Garcia and Snyder",
        logo: "https://picsum.photos/273/409",
        tagline: "Stand-alone bifurcated functionalities",
        goals:
          "Source imagine so. You list eat return. Meeting professional government movement water yet magazine. Onto truth scientist father. Action fall if mind what include.",
        achievements:
          "Discussion of hope miss. History least report reduce the move she rate. Green against seven cause face miss as. Camera sister avoid growth assume heavy just. Prepare southern tend use organization rather. Positive body less growth budget political.",
        financial_needs:
          "Help it child base establish modern knowledge. Serve morning protect health follow. Level real glass study do another. Among attention fill staff young training buy. Onto southern must attack.",
        description:
          "Andrade, Garcia and Snyder is a Christian organization that aims to revolutionize the way Christian organizations raise and manage funds through a dynamic platform that fosters growth and transparency. The organization uses advanced technologies like Artificial Intelligence(AI) and machine learning to streamline the fundraising process, offers a user-friendly, easy to navigate web experience for donors while ensuring efficient, private, and secured, endowment management for the beneficiary organizations."

        },

        {
            id: 4,
            name: "Watkins and Sons",
            logo: "https://dummyimage.com/208x798",
            tagline: "Quality-focused regional time-frame",
            goals:
            "Oil same worker water what. Everyone mind reflect affect forward run conference with. Store part officer later. Organization how life here beautiful. Part receive its least beat quite act whatever.",
            achievements:
            "Home treatment board open. Suggest phone give far technology protect. Consider hospital according. Mrs watch money popular continue. Paper stock director decision very yet owner improve.",
            financial_needs:
            "Watch over commercial nor strong still. Others really ground suggest. Whatever thing star kitchen machine do agency minute. Maybe effect organization but up production.",
            description:
            "Watkins and Sons is a Christian organization that aims to empower Christian organizations to effectively raise and manage funds for missions work. The organization offers advanced fundraising tools, comprehensive donor management features, and endowment management services that are efficient, private, and secured. The platform is user-friendly and easy to navigate, ensuring a seamless experience for donors."
            },
            {
            id: 5,
            name: "Miller-Banks",
            logo: "https://placekitten.com/94/793",
            tagline: "Function-based asymmetric extranet",
            goals:
            "Investment yet property develop. Safe community scientist. Difficult born above. Contain tree grow director. Truth impact mean if.",
            achievements:
            "Woman question degree race right. Wide nice executive return end voice one. Truth even however impact. Be between carry blood friend else. Television term page tree.",
            financial_needs:
            "See prepare training long ten box service happy. Either night close assume available task.",
            description:
            "Miller-Banks is a Christian organization that provides a comprehensive platform for Christian organizations to effectively raise funds for missions work. The platform offers advanced tools for fundraising, donor management, and endowment management that are efficient, private, and secured. The organization aims to ensure long-term sustainability and growth for Christian organizations through its revolutionary platform."
            }

  ];
  
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const handleOrganizationClick = (id) => {
    const organization = organizations.find((org) => org.id === id);
    setSelectedOrganization(organization);
  };

  return (
    <div>
      <h1>Learn More</h1>
      <div className="organization-list">
        {organizations.map((org) => (
          <div key={org.id} className="organization" onClick={() => handleOrganizationClick(org.id)}>
            <img src={org.logo} alt={`${org.name} logo`} />
            <h3>{org.name}</h3>
            <p>{org.tagline}</p>
          </div>
        ))}
      </div>
      {selectedOrganization && (
        <div className="selected-organization">
          <img src={selectedOrganization.logo} alt={`${selectedOrganization.name} logo`} />
          <h2>{selectedOrganization.name}</h2>
          <p>{selectedOrganization.description}</p>
        </div>
      )}
    </div>
  );
}

export default LearnMore;

  