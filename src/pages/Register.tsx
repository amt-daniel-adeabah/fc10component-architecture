import "../components/css/Register.scss";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { FormPage } from "../types/Types";
import { useState } from "react";
import PhotoPage from "./PhotoPage";
import InterestPage from "./Interest/InterestPage";
import InterestPick from "./Interest/InterestPick";
import InterestSuccess from "./Interest/InterestSuccess";

const Register = () => {
  const [formPage, setFormPage] = useState<FormPage>({
    register: true,
    photo: false,
    interest_page: false,
    interest_pick: false,
    interest_success: false,
    pageNumber: 1
  });

  return (
    <>
      {formPage.register && (
        <div className="register-container sidemenu-container">
          <SideMenu />
          <div>
            <TopBar />
            <div className="account-creation">
              <form
                className="account-form"
                onSubmit={() =>
                  setFormPage(prevState =>({
                    ...prevState,
                    register: false,
                    photo: true,
                    pageNumber: 2
                  }))
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
                  setFormPage(prevState =>({
                    ...prevState,
                    register: false,
                    photo: true,
                    pageNumber: 2
                  }))
                }
              >
                <img
                  className="google-logo"
                  src="src/assets/images/Google logo.png"
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
      {formPage.photo && <PhotoPage formHomePage={setFormPage} />}
      {formPage.interest_page && <InterestPage formHomePage={setFormPage} />}
      {formPage.interest_pick && <InterestPick formHomePage={setFormPage} />}
      {formPage.interest_success && (
        <InterestSuccess formHomePage={setFormPage} />
      )}
    </>
  );
};

export default Register;
