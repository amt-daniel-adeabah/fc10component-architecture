import React from "react";
import "../Interest/Interest.scss";
import { FormPage } from "../../../types/Types";
import { handleFormHomePageInterest } from "../../../utils/formHelpers";
import FirstInterest from "./components/FirstInterest";

const interestOptions = [
  { label: "Social Interaction", className: "interests-button" },
  { label: "Personal development", className: "interests-button" },
  { label: "Entertainment and Fun", className: "interests-button" },
  { label: "Rewards and recognition", className: "interests-button" }
];

const InterestPage = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const handleClick = handleFormHomePageInterest(formHomePage);

  return (
    <div className="interest-content">
      <h1>Hey there! What brings you here?</h1>
      <p>This will help us make great recommendations.</p>

      {interestOptions.map((option, index) => (
        <FirstInterest
          key={index}
          label={option.label}
          initialClassName={option.className}
        />
      ))}

      <button className="continue" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
};

export default InterestPage;
