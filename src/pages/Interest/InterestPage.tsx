import "../../components/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import TopBar from "../../components/TopBar";
import { FormPage } from "../../types/Types";

const PageStates = {
  Register: "register",
  Photo: "photo",
  Interest: "interest",
  InterestPick: "interestPick",
  InterestSuccess: "interestSuccess"
};

const interestOptions = [
  { label: "+ Social Interaction", className: "active-button" },
  { label: "+ Personal development", className: "interests-button" },
  { label: "+ Entertainment and Fun", className: "interests-button" },
  { label: "+ Rewards and recognition", className: "interests-button" }
];

interface InterestButtonProps {
  label: string;
  className: string;
}

const InterestButton = ({ label, className }: InterestButtonProps) => (
  <button className={className}>{label}</button>
);

const InterestPage = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const currentPage = PageStates.Interest;

  return (
    <div className="sidemenu-container">
      <SideMenu
        registerPage={currentPage === PageStates.Register}
        photoPage={currentPage === PageStates.Photo}
        interestPage={currentPage === PageStates.Interest}
        interestPick={currentPage === PageStates.InterestPick}
        interestSuccess={currentPage === PageStates.InterestSuccess}
      />
      <div>
      <TopBar currentPage="interestPage" formHomePage={formHomePage} /> 
        <div className="interest-container">
          <div className="interest-column">
            <h1>Hey there! What brings you here?</h1>
            <p>This will help us make great recommendations.</p>

            {interestOptions.map((option, index) => (
              <InterestButton
                key={index}
                label={option.label}
                className={option.className}
              />
            ))}

            <button
              className="continue"
              onClick={() =>
                formHomePage({
                  register: false,
                  photo: false,
                  interest_page: false,
                  interest_pick: true,
                  interest_success: false
                })
              }
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
