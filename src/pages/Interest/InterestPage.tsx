import "../../assets/css/Interest.scss"
import SideMenu from '../../components/SideMenu'
import TopBar from '../../components/TopBar'

const Interest = () => {
  return (
    <>
      <div className="sidemenu-container">
          <SideMenu />
        <div>
          <TopBar />
          <div>Interest</div>
        </div>
      </div>
    </>
  )
}

export default Interest