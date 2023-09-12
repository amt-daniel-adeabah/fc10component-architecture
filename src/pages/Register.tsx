import { useNavigate } from "react-router-dom";
import "../assets/css/Register.scss";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="register-container sidemenu-container">
        <SideMenu />
        <div>
          <TopBar />
          <div className="account-creation">
            <form className="account-form" onSubmit={() => navigate("/photo")}>
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
            <button className="sign-up" onClick={() => navigate("/photo")}>
              <img
                className="google-logo"
                src="src/assets/images/Google logo.png"
              />
              <p>Sign up with Google</p>
            </button>
            <div className="login">
              Already have an account? <a href="/photo">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
