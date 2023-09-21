import React from "react";
import "../Interest/Interest.scss";
import { FormPage } from "../../../types/Types";
import { handleFormHomePageSuccess } from "../../../utils/formHelpers";
import SecondInterest from "./components/SecondInterest"

const interests = [
  { name: "Game", className: "pick-gaming-button" },
  { name: "Fashion", className: "pick-fashion-button" },
  { name: "Music", className: "pick-music-button" },
  { name: "Reading", className: "pick-reading-button" }
];

const InterestPick = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const handleClick = handleFormHomePageSuccess(formHomePage);

  return (
    <div className="interest-content">
      <h1>Let's get started by picking some interests</h1>
      <p>Alright, let's pick something we're interested in and get started!</p>
      <div className="pick-row">
        {interests.map((interest, index) => (
          <SecondInterest
            key={index}
            name={interest.name}
            className={interest.className}
          />
        ))}
      </div>
      <button className="continue" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
};

export default InterestPick;
