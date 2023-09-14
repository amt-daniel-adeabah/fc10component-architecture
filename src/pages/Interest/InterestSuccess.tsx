import "../../components/css/Interest.scss";
import SideMenu from "../../components/SideMenu";
import VictoryPhoto from "../../assets/images/victory-success.svg";
import { FormPage } from "../../types/Types";

const InterestSuccess = ({formHomePage}:{formHomePage:React.Dispatch<React.SetStateAction<FormPage>>}) => {

  return (
    <div className="success-width sidemenu-container">
      <SideMenu />
      <div className="success-column">
        <div className="interest-container">
          <div className="interest-column">
            <h1>Wohoo!</h1>
            <p>
              Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life.
              Let's do this!
            </p>
            <img src={VictoryPhoto} alt="Victory Success" className="victory-success" />

            <button className="continue" onClick={() =>
                  formHomePage({
                    register: true,
                    photo: false,
                    interest_page: false,
                    interest_pick: false,
                    interest_success: false,
                  })
                }>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestSuccess;
