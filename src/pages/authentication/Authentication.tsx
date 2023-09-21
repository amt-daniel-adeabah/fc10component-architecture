import { useState, useEffect } from "react";
import "./Authentication.scss";
import PhotoPage from "./Photo/PhotoPage";
import InterestPage from "./Interest/InterestPage";
import InterestPick from "./Interest/InterestPick";
import InterestSuccess from "./Interest/InterestSuccess";
import RegisterPage from "./Register/RegisterPage";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { FormPage } from "../../types/Types";

type Components = {
  [key: string]: JSX.Element;
};

const Authentication = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const [formPage, setFormPage] = useState(() => {
    const savedState = localStorage.getItem("formPage");
    return savedState
      ? JSON.parse(savedState)
      : {
          registerPage: true
        };
  });

  useEffect(() => {
    localStorage.setItem("formPage", JSON.stringify(formPage));
  }, [formPage]);

  const components: Components = {
    registerPage: <RegisterPage formHomePage={setFormPage} />,
    photoPage: <PhotoPage formHomePage={setFormPage} />,
    interestPage: <InterestPage formHomePage={setFormPage} />,
    interestPick: <InterestPick formHomePage={setFormPage} />,
    interestSuccess: <InterestSuccess formHomePage={setFormPage} />
  };

  // The current page based on the formPage state.
  const currentPage = Object.keys(formPage).find((page) => formPage[page]) || "";

  const showTopbar = currentPage !== "interestSuccess";

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
