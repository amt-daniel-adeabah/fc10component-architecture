import BackArrow from "../../assets/images/back-arrow.svg";
import "../TopBar/TopBar.scss";
import { FormPage } from "../../types/Types";

interface TopBarProps {
  currentPage: string;
  formHomePage: (formPage: FormPage) => void;
}

const pageMap: Record<string, Partial<FormPage>> = {
  photoPage: { registerPage: true },
  interestPage: { photoPage: true },
  interestPick: { interestPage: true }
};

const TopBar: React.FC<TopBarProps> = ({ currentPage, formHomePage }) => {
  const currentPageData = pageMap[currentPage] || {};
  const step = Object.keys(pageMap).indexOf(currentPage) + 2;

  const handleBackClick = () => {
    formHomePage({
      registerPage: false,
      photoPage: false,
      interestPage: false,
      interestPick: false,
      interestSuccess: false,
      ...currentPageData
    });
  };

  const showBackButton = currentPage !== "registerPage";

  return (
    <div className="top-container">
      <div className="topnav">
        {showBackButton && (
          <div className="back-button" onClick={handleBackClick}>
            <img src={BackArrow} alt="" /> <span>Back</span>
          </div>
        )}
        <div className="steps">
          <strong>Step {step} </strong>of 4
        </div>
        Exit
      </div>
    </div>
  );
};

export default TopBar;
