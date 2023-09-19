import BackArrow from "../assets/images/back-arrow.svg";
import "../components/css/topbar.scss";

interface TopBarProps {
  currentPage: string;
}

const TopBar: React.FC<TopBarProps> = ({ currentPage }) => {
  let step = 1;

  if (currentPage === "photoPage") {
    step = 2;
  } else if (currentPage === "interestPage") {
    step = 3;
  } else if (currentPage === "interestPick") {
    step = 4;
  }

  return (
    <div className="top-container">
      <div className="topnav">
        {currentPage !== "registerPage" && (
          <div className="back-button">
            <img src={BackArrow} alt="" /> Back
          </div>
        )}
        <div className="steps">
          <b>Step {step}</b> &nbsp;of 4
        </div>
        Exit
      </div>
    </div>
  );
};

export default TopBar;
