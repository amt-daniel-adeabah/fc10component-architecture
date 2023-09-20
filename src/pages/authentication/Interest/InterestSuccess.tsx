import "../Interest/Interest.scss";
import SideMenu from "../../../components/SideMenu/SideMenu";
import VictoryPhoto from "../../../assets/images/victory-success.svg";
import { FormPage } from "../../../types/Types";

const InterestSuccess = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  return (
    <div className="sidemenu-container">
      <SideMenu currentPage="interestSuccess" formHomePage={formHomePage} />
      <div className="success-container">
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

            <button
              className="continue"
              onClick={() =>
                formHomePage({
                  registerPage: true,
                  photoPage: false,
                  interestPage: false,
                  interestPick: false,
                  interestSuccess: false
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

export default InterestSuccess;
