import "../../components/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import TopBar from "../../components/TopBar";
import { FormPage } from "../../types/Types";

const interestOptions = [
  { label: "+ Social Interaction", className: "active-button" },
  { label: "+ Personal development", className: "interests-button" },
  { label: "+ Entertainment and Fun", className: "interests-button" },
  { label: "+ Rewards and recognition", className: "interests-button" },
];

const InterestPage = ({formHomePage}:{formHomePage:React.Dispatch<React.SetStateAction<FormPage>>}) => {

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

            <button className="continue" onClick={() =>
                  formHomePage(prevState =>({
                    ...prevState,
                    interest_page: false,
                    interest_pick: true,
                    pageNumber: 3
                  }))
                }>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
