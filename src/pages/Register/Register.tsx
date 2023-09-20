import "../../pages/Register/Register.scss";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopBar from "../../components/TopBar/TopBar";
import { FormPage } from "../../types/Types";
import { useState } from "react";
import PhotoPage from "../Photo/PhotoPage";
import InterestPage from "../Interest/InterestPage";
import InterestPick from "../Interest/InterestPick";
import InterestSuccess from "../Interest/InterestSuccess";

const Register = () => {
  const [formPage, setFormPage] = useState<FormPage>({
    register: true,
    photoPage: false,
    interest_page: false,
    interest_pick: false,
    interest_success: false
  });

  const currentPage = formPage.register
    ? "register"
    : formPage.photoPage
    ? "photo"
    : formPage.interest_page
    ? "interest"
    : formPage.interest_pick
    ? "interestPick"
    : formPage.interest_success
    ? "interestSuccess"
    : "";

  return (
    <>
      {currentPage === "register" && (
        <div className="register-container sidemenu-container">
          <SideMenu currentPage="register" formHomePage={setFormPage} />
          <div>
            <TopBar currentPage="registerPage" formHomePage={setFormPage} />
            <div className="account-creation">
              <form
                className="account-form"
                onSubmit={() =>
                  setFormPage({
                    register: false,
                    photoPage: true,
                    interest_page: false,
                    interest_pick: false,
                    interest_success: false
                  })
                }
              >
                <p className="title">Create Account</p>
                <div className="input-element">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="John Doe" />
                </div>
                <div className="input-element">
                  <label>E-mail</label>
                  <input
                    type="text"
                    name="e-mail"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
                <div className="input-element">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                </div>

                <button type="submit" className="create-btn">
                  Create Account
                </button>
                <button
                  className="sign-up"
                  onClick={() =>
                    setFormPage({
                      register: false,
                      photoPage: true,
                      interest_page: false,
                      interest_pick: false,
                      interest_success: false
                    })
                  }
                >
                  <img
                    className="google-logo"
                    src="src/assets/images/Google logo.png"
                    alt="Google Logo"
                  />
                  <p>Sign up with Google</p>
                </button>
                <div className="login">
                  Already have an account? <a href="#">Log In</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {currentPage === "photo" && (
        <PhotoPage formHomePage={setFormPage} />
      )}
      {currentPage === "interest" && (
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

export default Register;
