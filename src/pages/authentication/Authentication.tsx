import { useState, useEffect } from "react";
import PhotoPage from "./Photo/PhotoPage";
import InterestPage from "./Interest/InterestPage";
import InterestPick from "./Interest/InterestPick";
import InterestSuccess from "./Interest/InterestSuccess";
import RegisterPage from "./Register/RegisterPage";

const Authentication = () => {
  // Load formPage from local storage 
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

  // Save formPage local storage if state changes
  useEffect(() => {
    localStorage.setItem("formPage", JSON.stringify(formPage));
  }, [formPage]);

  const currentPage = formPage.registerPage
    ? "registerPage"
    : formPage.photoPage
    ? "photoPage"
    : formPage.interestPage
    ? "interestPage"
    : formPage.interestPick
    ? "interestPick"
    : formPage.interestSuccess
    ? "interestSuccess"
    : "";

  return (
    <>
      {currentPage === "registerPage" && (
        <RegisterPage formHomePage={setFormPage} />
      )}
      {currentPage === "photoPage" && <PhotoPage formHomePage={setFormPage} />}
      {currentPage === "interestPage" && (
        <InterestPage formHomePage={setFormPage} />
      )}
      {currentPage === "interestPick" && (
        <InterestPick formHomePage={setFormPage} />
      )}
      {currentPage === "interestSuccess" && (
        <InterestSuccess formHomePage={setFormPage} />
      )}
    </>
  );
};

export default Authentication;
