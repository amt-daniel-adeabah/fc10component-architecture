import "../../assets/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import VictoryPhoto from "../../assets/images/victory-success.svg";
import { useNavigate } from "react-router-dom";

const InterestSuccess = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/interest/pick");
  };

  return (
    <div className="success-width sidemenu-container">
      <SideMenu />
      <div className="success-column">
        <div className="interest-container">
          <div className="interest-column">
            <h1>Wohoo!</h1>
            <p>
              Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life.
              Let's do this!
            </p>
            <img src={VictoryPhoto} alt="Victory Success" className="victory-success" />

            <button className="continue" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestSuccess;
