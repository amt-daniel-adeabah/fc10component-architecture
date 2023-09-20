import "../Interest/Interest.scss";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopBar from "../../components/TopBar/TopBar";
import { FormPage } from "../../types/Types";

const interests = [
  { name: "Game", className: "pick-gaming-button" },
  { name: "Fashion", className: "pick-fashion-button" },
  { name: "Music", className: "pick-music-button" },
  { name: "Reading", className: "pick-reading-button" }
];

interface InterestButtonProps {
  name: string;
  className: string;
}

const InterestButton = ({ name, className }: InterestButtonProps) => (
  <div className={`pick-button ${className}`}>
    <h1>{name}</h1>
    <button>Add</button>
  </div>
);

const InterestPick = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  return (
    <div className="sidemenu-container">
        <SideMenu currentPage="interest_pick" formHomePage={formHomePage} />
      <div>
      <TopBar currentPage="interestPick" formHomePage={formHomePage} /> 
        <div className="interest-container">
          <div className="interest-column">
            <h1>Let's get started by picking some interests</h1>
            <p>
              Alright, let's pick something we're interested in and get started!
            </p>

            <div className="pick-row">
              {interests.map((interest, index) => (
                <InterestButton
                  key={index}
                  name={interest.name}
                  className={interest.className}
                />
              ))}
            </div>

            <button
              className="continue"
              onClick={() =>
                formHomePage({
                  register: false,
                  photoPage: false,
                  interest_page: false,
                  interest_pick: false,
                  interest_success: true
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

export default InterestPick;
