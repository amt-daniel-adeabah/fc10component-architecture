import { useLocation, useNavigate } from "react-router-dom";
import BackArrow from "../assets/images/back-arrow.svg"
import "../assets/css/Topbar.scss";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    if (location.pathname === "/photo") {
      navigate("/register");
    } else if (location.pathname === "/interest" || location.pathname === "/interest/pick") {
      navigate("/photo");
    }
  };

  const showOrHideBackButton = () => {
    if (location.pathname !== "/register") {
      return (
        <div className="back-button" onClick={handleBackButtonClick}>
          <img src={BackArrow} alt="" /> Back
        </div>
      );
    }
    return null;
  };

  const getStep = () => {
    switch (location.pathname) {
      case "/photo":
        return 2;
      case "/interest":
        return 3;
      case "/interest/pick":
        return 4;
      default:
        return 1;
    }
  };

  return (
    <div className="top-bar">
      {showOrHideBackButton()}
      <div className="steps">
        <b>
        Step {getStep()} 
        </b>
        &nbsp;of 4
      </div>
      Exit
    </div>
  );
};

export default TopBar;
