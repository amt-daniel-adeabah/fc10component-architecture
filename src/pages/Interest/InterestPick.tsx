import { useNavigate } from "react-router-dom";
import "../../assets/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import TopBar from "../../components/TopBar";

const interests = [
  { name: "Game", className: "pick-gaming-button" },
  { name: "Fashion", className: "pick-fashion-button" },
  { name: "Music", className: "pick-music-button" },
  { name: "Reading", className: "pick-reading-button" },
];

const InterestPick = () => {
  const navigate = useNavigate();

  return (
    <div className="sidemenu-container">
      <SideMenu />
      <div>
        <TopBar />
        <div className="interest-container">
          <div className="interest-column">
            <h1>Let’s get started by picking some interests</h1>
            <p>Alright, let's pick something we're interested in and get started!</p>

            <div className="pick-row">
              {interests.map((interest, index) => (
                <div key={index} className={`pick-button ${interest.className}`}>
                  <h1>{interest.name}</h1>
                  <button>Add</button>
                </div>
              ))}
            </div>

            <button className="pick-continue" onClick={() => navigate("/interest/success")}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPick;
