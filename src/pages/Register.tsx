import "../assets/css/Register.scss"
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const Register = () => {
  return (
    <>
      <div className="sidemenu-container">
          <SideMenu />
        <div>
          <TopBar />
          <div>Register</div>
        </div>
      </div>
    </>
  )
}

export default Register