import BackArrow from "../../assets/images/back-arrow.svg";
import "../TopBar/TopBar.scss";
import { FormPage } from "../../types/Types";

interface TopBarProps {
  currentPage: string;
  formHomePage: (formPage: FormPage) => void;
}

const pageMap: Record<string, Partial<FormPage>> = {
  photoPage: { register: true },
  interestPage: { photoPage: true },
  interestPick: { interest_page: true },
};

const TopBar: React.FC<TopBarProps> = ({ currentPage, formHomePage }) => {
  const currentPageData = pageMap[currentPage] || {};
  const step = Object.keys(pageMap).indexOf(currentPage) + 2;

  const handleBackClick = () => {
    formHomePage({
      register: false,
      photoPage: false,
      interest_page: false,
      interest_pick: false,
      interest_success: false,
      ...currentPageData,
    });
  };

  const showBackButton = currentPage !== "registerPage";

  return (
    <div className="top-container">
      <div className="topnav">
        {showBackButton && (
          <div className="back-button" onClick={handleBackClick}>
            <img src={BackArrow} alt="" /> Back
          </div>
        )}
        <div className="steps">
          Step {step} of 4
        </div>
        Exit
      </div>
    </div>
  );
};

export default TopBar;
