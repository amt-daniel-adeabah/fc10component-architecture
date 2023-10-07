import { useState, useEffect } from "react";
import PhotoPage from "../../pages/authentication/Photo/PhotoPage";
import InterestPage from "../../pages/authentication/Interest/InterestPage";
import InterestPick from "../../pages/authentication/Interest/InterestPick";
import InterestSuccess from "../../pages/authentication/Interest/InterestSuccess";
import RegisterPage from "../../pages/authentication/Register/RegisterPage";

type Components = {
  [key: string]: JSX.Element;
};

export function AuthState() {
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
  const currentPage =
    Object.keys(formPage).find((page) => formPage[page]) || "";

  const showTopbar = currentPage !== "interestSuccess";

  return {
    formPage,
    setFormPage,
    components,
    currentPage,
    showTopbar
  };
}
