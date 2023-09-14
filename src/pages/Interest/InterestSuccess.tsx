import "../../components/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import VictoryPhoto from "../../assets/images/victory-success.svg";
import { FormPage } from "../../types/Types";

const PageStates = {
  Register: "register",
  Photo: "photo",
  Interest: "interest",
  InterestPick: "interestPick",
  InterestSuccess: "interestSuccess",
};

const ContinueButton = ({
  formHomePage,
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => (
  <button
    className="continue"
    onClick={() =>
      formHomePage({
        register: true,
        photo: false,
        interest_page: false,
        interest_pick: false,
        interest_success: false,
      })
    }
  >
    Continue
  </button>
);

const InterestSuccess = ({
  formHomePage,
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const currentPage = PageStates.InterestSuccess;

  return (
    <div className="success-width sidemenu-container">
      <SideMenu
        registerPage={currentPage === PageStates.Register}
        photoPage={currentPage === PageStates.Photo}
        interestPage={currentPage === PageStates.Interest}
        interestPick={currentPage === PageStates.InterestPick}
        interestSuccess={currentPage === PageStates.InterestSuccess}
      />
      <div className="success-column">
        <div className="interest-container">
          <div className="interest-column">
            <h1>Wohoo!</h1>
            <p>
              Hey there! Your registration is complete, get excited for the
              ultimate quiz experience of your life. Let's do this!
            </p>
            <img
              src={VictoryPhoto}
              alt="Victory Success"
              className="victory-success"
            />

            <ContinueButton formHomePage={formHomePage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestSuccess;
