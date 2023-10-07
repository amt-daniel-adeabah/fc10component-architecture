import React from "react";
import "../Register/Register.scss";
import { FormPage } from "../../../types/Types";
import GoogleLogo from "../../../assets/images/Google logo.png";
import { handleFormHomePageRegister } from "../../../utils/formHelpers";
import { useRegisterForm } from "../../../utils/FormErrors";

const RegisterPage = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const { formData, formErrors, handleInputChange, handleSubmit } =
    useRegisterForm();
  const handleClick = handleFormHomePageRegister(formHomePage);

  return (
    <>
      <form className="account-form" onSubmit={handleSubmit}>
        <p className="title">Create Account</p>
        <div className="input-element">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <div className="input-element">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="input-element">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <p className="error">{formErrors.password}</p>
          )}
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
