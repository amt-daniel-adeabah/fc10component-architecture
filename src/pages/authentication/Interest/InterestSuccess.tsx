import React from "react";
import "../Interest/Interest.scss";
import VictoryPhoto from "../../../assets/images/victory-success.svg";
import { FormPage } from "../../../types/Types";
import { handleFormHomePageSuccessDone } from "../../../utils/formHelpers";


const InterestSuccess = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const handleClick = handleFormHomePageSuccessDone(formHomePage);

  return (
    <div className="interest-success">
      <div className="interest-content">
        <h1>Wohoo!</h1>
        <p>
          Hey there! Your registration is complete, get excited for the ultimate
          quiz experience of your life. Let's do this!
        </p>
        <img
          src={VictoryPhoto}
          alt="Victory Success"
          className="victory-success"
        />

        <button className="continue" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default InterestSuccess;
