import { useNavigate } from "react-router-dom";
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import BlankPhoto from "../assets/images/empty-image.svg"
import "../assets/css/Photo.scss"

const PhotoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sidemenu-container">
          <SideMenu />
        <div>
          <TopBar />
          <div className="photo-container">
            <div className="photo-column">
              <h1>Add Photo</h1>
              <p>Add a photo so other members know who you are</p>
              <img src={BlankPhoto} alt="" />

              <button className="upload"  onClick={() => navigate("/interest")}>Upload a photo</button>
              <button className="skip"  onClick={() => navigate("/interest/success")}>Skip</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotoPage