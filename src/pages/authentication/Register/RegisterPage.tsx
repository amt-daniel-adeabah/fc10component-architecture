import React from "react";
import "../Register/Register.scss";
import { FormPage } from "../../../types/Types";
import GoogleLogo from "../../../assets/images/Google logo.png";
import { handleFormHomePageRegister } from "../../../utils/formHelpers";

const RegisterPage = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const handleClick = handleFormHomePageRegister(formHomePage);

  return (
    <>
      <form className="account-form" onSubmit={handleClick}>
        <p className="title">Create Account</p>
        <div className="input-element">
          <label>Name</label>
          <input type="text" name="name" placeholder="John Doe" />
        </div>
        <div className="input-element">
          <label>E-mail</label>
          <input type="text" name="e-mail" placeholder="johndoe@gmail.com" />
        </div>
        <div className="input-element">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>

        <button type="submit" className="create">
          Create Account
        </button>

        <button onClick={handleClick} className="google-button">
          <img src={GoogleLogo} className="google-logo" alt="Google Logo" />
          <p>Sign up with Google</p>
        </button>
        <div className="login">
          Already have an account? <a href="#">Log In</a>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
