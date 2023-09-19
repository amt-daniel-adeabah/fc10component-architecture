import BackArrow from "../assets/images/back-arrow.svg";
import "../components/css/topbar.scss";
import { FormPage } from "../types/Types"; 

interface TopBarProps {
  currentPage: string;
  formHomePage: (formPage: FormPage) => void;
}

const TopBar: React.FC<TopBarProps> = ({ currentPage, formHomePage }) => {
  let step = 1;

  if (currentPage === "photoPage") {
    step = 2;
  } else if (currentPage === "interestPage") {
    step = 3;
  } else if (currentPage === "interestPick") {
    step = 4;
  }

  const handleBackClick = () => {
    if (currentPage === "photoPage") {
      formHomePage({
        register: true,
        photo: false,
        interest_page: false,
        interest_pick: false,
        interest_success: false
      });
    } else if (currentPage === "interestPage") {
      formHomePage({
        register: false,
        photo: true,
        interest_page: false,
        interest_pick: false,
        interest_success: false
      });
    } else if (currentPage === "interestPick") {
      formHomePage({
        register: false,
        photo: false,
        interest_page: true,
        interest_pick: false,
        interest_success: false
      });
    }
  };

  return (
    <div className="top-container">
      <div className="topnav">
        {currentPage !== "registerPage" && (
          <div className="back-button" onClick={handleBackClick}>
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
