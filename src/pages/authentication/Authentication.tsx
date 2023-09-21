import React from "react";
import "./Authentication.scss";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { FormPage } from "../../types/Types";
import { AuthState } from "../../state/authentication/AuthState";

const Authentication = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const { setFormPage, components, currentPage, showTopbar } = AuthState();

  return (
    <div className="authentication-container">
      <div className="sidemenu-container">
        <SideMenu currentPage={currentPage} formHomePage={formHomePage} />
      </div>

      <div className="right-container">
        <div className="right-column">
          {showTopbar && <TopBar currentPage={currentPage} formHomePage={setFormPage} />}
          {components[currentPage]}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
