import React, { useState, useEffect } from "react";
import "./Authentication.scss";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { FormPage } from "../../types/Types";
import { AuthState } from "../../state/authentication/AuthState";
import SpinningIcon from "../../assets/images/Ball-1s-200px.svg";

const Authentication = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const { setFormPage, components, currentPage, showTopbar } = AuthState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, [currentPage]);

  return (
    <div className="authentication-container">
      <div className="sidemenu-container">
        <SideMenu currentPage={currentPage} formHomePage={formHomePage} />
      </div>

      <div className="right-container">
        <div className="right-column">
          {showTopbar && (
            <TopBar currentPage={currentPage} formHomePage={setFormPage} />
          )}
          {isLoading ? (
            <img src={SpinningIcon} className="loading" alt="" />
          ) : (
            components[currentPage]
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
