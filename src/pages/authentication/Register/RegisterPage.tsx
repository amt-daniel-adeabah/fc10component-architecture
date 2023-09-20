import React from "react";
import SideMenu from "../../../components/SideMenu/SideMenu";
import TopBar from "../../../components/TopBar/TopBar";
import "../Register/Register.scss";
import { FormPage } from "../../../types/Types";

const RegisterPage = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  return (
    <div className="register-container sidemenu-container">
   <SideMenu currentPage="registerPage" formHomePage={formHomePage} />
      <div>
        <TopBar currentPage="registerPage" formHomePage={formHomePage} /> 
      <div className="account-creation">
        <form
          className="account-form"
          onSubmit={() =>
            formHomePage({
              registerPage: false,
              photoPage: true,
              interestPage: false,
              interestPick: false,
              interestSuccess: false
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
              formHomePage({
                registerPage: false,
                photoPage: true,
                interestPage: false,
                interestPick: false,
                interestSuccess: false
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
  );
};

export default RegisterPage;
