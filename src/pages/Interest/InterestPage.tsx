import { useNavigate } from "react-router-dom";
import "../../assets/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import TopBar from "../../components/TopBar";

const interestOptions = [
  { label: "+ Social Interaction", className: "active-button" },
  { label: "+ Personal development", className: "interests-button" },
  { label: "+ Entertainment and Fun", className: "interests-button" },
  { label: "+ Rewards and recognition", className: "interests-button" },
];

const InterestPage = () => {
  const navigate = useNavigate();

  return (
    <div className="sidemenu-container">
      <SideMenu />
      <div>
        <TopBar />
        <div className="interest-container">
          <div className="interest-column">
            <h1>Hey there! What brings you here?</h1>
            <p>This will help us make great recommendations.</p>

              {interestOptions.map((option, index) => (
                <button
                  key={index}
                  className={option.className}
                >
                  {option.label}
                </button>
              ))}

            <button className="continue" onClick={() => navigate("/interest/pick")}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
