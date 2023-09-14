import BackArrow from "../assets/images/back-arrow.svg";
import "../components/css/topbar.scss";


const TopBar = () => {
  
  return (
    <div className="top-container">
      <div className="topnav">
        {(
          <div className="back-button" >
            <img src={BackArrow} alt="" /> Back
          </div>
        )}
        <div className="steps">
          <b>Step {}</b> &nbsp;of 4
        </div>
        Exit
      </div>
    </div>
  );
};

export default TopBar;
