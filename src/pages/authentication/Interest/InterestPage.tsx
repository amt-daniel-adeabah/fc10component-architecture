import React from "react";
import "..//Interest/Interest.scss";
import SideMenu from "../../../components/SideMenu/SideMenu";
import TopBar from "../../../components/TopBar/TopBar";
import { FormPage } from "../../../types/Types";

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
  return (
    <div className="sidemenu-container">
      <SideMenu currentPage="interestPage" formHomePage={formHomePage} />
      <div>
        <TopBar currentPage="interestPage" formHomePage={formHomePage} />
        <div className="interest-container">
          <div className="interest-column">
            <h1>Hey there! What brings you here?</h1>
            <p>This will help us make great recommendations.</p>

            {interestOptions.map((option, index) => (
              <InterestButton
                key={index}
                label={option.label}
                className={option.className}
              />
            ))}

            <button
              className="continue"
              onClick={() =>
                formHomePage({
                  registerPage: false,
                  photoPage: false,
                  interestPage: false,
                  interestPick: true,
                  interestSuccess: false
                })
              }
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
