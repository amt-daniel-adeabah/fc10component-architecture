import "../assets/css/Photo.scss"
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const Photo = () => {
  return (
    <>
      <div className="sidemenu-container">
          <SideMenu />
        <div>
          <TopBar />
          <div>Photo</div>
        </div>
      </div>
    </>
  )
}

export default Photo