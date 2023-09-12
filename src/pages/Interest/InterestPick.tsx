import "../../assets/css/Interest.scss"
import SideMenu from '../../components/SideMenu'
import TopBar from '../../components/TopBar'

const InterestPick = () => {
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

export default InterestPick