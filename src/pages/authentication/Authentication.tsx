import { useState, useEffect } from "react";
import PhotoPage from "./Photo/PhotoPage";
import InterestPage from "./Interest/InterestPage";
import InterestPick from "./Interest/InterestPick";
import InterestSuccess from "./Interest/InterestSuccess";
import RegisterPage from "./Register/RegisterPage";

type Components = {
  [key: string]: JSX.Element;
};

const Authentication = () => {
  const [formPage, setFormPage] = useState(() => {
    const savedState = localStorage.getItem("formPage");
    return savedState ? JSON.parse(savedState) : {
      registerPage: true,
      photoPage: false,
      interestPage: false,
      interestPick: false,
      interestSuccess: false
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

  const currentPage = Object.keys(formPage).find(page => formPage[page]) || "";

  return (
    <>
      {components[currentPage]}
    </>
  );
};

export default Authentication;
