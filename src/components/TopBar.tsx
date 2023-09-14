import BackArrow from "../assets/images/back-arrow.svg";
import "../components/css/topbar.scss";

const TopBar = () => {

  const showBackButton = location.pathname !== "/register";

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
    <div className="top-container">
      <div className="topnav">
        {showBackButton && (
          <div className="back-button">
            <img src={BackArrow} alt="" /> Back
          </div>
        )}
        <div className="steps">
          <b>Step {getStep()}</b> &nbsp;of 4
        </div>
        Exit
      </div>
    </div>
  );
};

export default TopBar;
