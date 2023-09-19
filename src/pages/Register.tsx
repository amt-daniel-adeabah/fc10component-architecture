import "../components/css/Register.scss";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { FormPage } from "../types/Types";
import { useState } from "react";
import PhotoPage from "./PhotoPage";
import InterestPage from "./Interest/InterestPage";
import InterestPick from "./Interest/InterestPick";
import InterestSuccess from "./Interest/InterestSuccess";

const PageStates = {
  Register: "register",
  Photo: "photo",
  Interest: "interest",
  InterestPick: "interestPick",
  InterestSuccess: "interestSuccess"
};

const Register = () => {
  const [formPage, setFormPage] = useState<FormPage>({
    register: true,
    photo: false,
    interest_page: false,
    interest_pick: false,
    interest_success: false
  });

  const currentPage = formPage.register
    ? PageStates.Register
    : formPage.photo
    ? PageStates.Photo
    : formPage.interest_page
    ? PageStates.Interest
    : formPage.interest_pick
    ? PageStates.InterestPick
    : formPage.interest_success
    ? PageStates.InterestSuccess
    : "";

  return (
    <>
      {currentPage === PageStates.Register && (
        <div className="register-container sidemenu-container">
          <SideMenu
            registerPage={currentPage === PageStates.Register}
            photoPage={currentPage === PageStates.Photo}
            interestPage={currentPage === PageStates.Interest}
            interestPick={currentPage === PageStates.InterestPick}
            interestSuccess={currentPage === PageStates.InterestSuccess}
          />
          <div>
            <TopBar currentPage="registerPage" />
            <div className="account-creation">
              <form
                className="account-form"
                onSubmit={() =>
                  setFormPage({
                    register: false,
                    photo: true,
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
              </form>
              <button
                className="sign-up"
                onClick={() =>
                  setFormPage({
                    register: false,
                    photo: true,
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
            </div>
          </div>
        </div>
      )}
      {currentPage === PageStates.Photo && (
        <PhotoPage formHomePage={setFormPage} />
      )}
      {currentPage === PageStates.Interest && (
        <InterestPage formHomePage={setFormPage} />
      )}
      {currentPage === PageStates.InterestPick && (
        <InterestPick formHomePage={setFormPage} />
      )}
      {currentPage === PageStates.InterestSuccess && (
        <InterestSuccess formHomePage={setFormPage} />
      )}
    </>
  );
};

export default Register;
