import React from "react";
import "../Interest/Interest.scss";
import { FormPage } from "../../../types/Types";
import { handleFormHomePageInterest } from "../../../utils/formHelpers";

const interestOptions = [
  { label: "+ Social Interaction", className: "active-button" },
  { label: "+ Personal development", className: "interests-button" },
  { label: "+ Entertainment and Fun", className: "interests-button" },
  { label: "+ Rewards and recognition", className: "interests-button" }
];

interface InterestButtonProps {
  label: string;
  className: string;
}

const InterestButton = ({ label, className }: InterestButtonProps) => (
  <button className={className}>{label}</button>
);

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
        <InterestButton
          key={index}
          label={option.label}
          className={option.className}
        />
      ))}

      <button className="continue" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
};

export default InterestPage;
