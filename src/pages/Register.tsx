import { useNavigate } from "react-router-dom";
import "../assets/css/Register.scss";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <SideMenu />
      <div>
        <TopBar />
          <div className="account-creation">
            <h4>Create Account</h4>
            <form className="account-form" onSubmit={() => navigate('/photo')}>
              <label>Name</label>
              <input type="text" name="name" placeholder="John Doe" />
              <label>E-mail</label>
              <input
                type="text"
                name="e-mail"
                placeholder="johndoe@gmail.com"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <button type="submit" className="create-btn">
                Create Account
              </button>
            </form>
            <button className="sign-up">Sign up with Google</button>
            <div className="login">
              Already have an account? <a href="#">Log in</a>
            </div>
          </div>
      </div>
    </>
  );
};

export default Register;
