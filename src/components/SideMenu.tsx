import { useLocation } from 'react-router-dom';
import '../assets/css/SideMenu.scss';

{/* Background Photos */}
import WomanLaptop from '../assets/images/woman-hold-laptop.svg';
import WomanLaptopWhite from '../assets/images/woman-hold-laptop-white.svg';
import WomanHappy from '../assets/images/woman-happy.svg';
import BoyTablet from '../assets/images/boy-hold-tablet.svg';
import ManLaptop from '../assets/images/man-hold-laptop.svg';

const SideMenu = () => {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/register':
        return WomanLaptop;
      case '/photo':
        return BoyTablet;
      case '/interest':
        return WomanLaptopWhite;
      case '/interest/pick':
        return ManLaptop;
      case '/interest/success':
        return WomanHappy;
      default:
        return WomanLaptop;
    }
  };

  return (
    <div className="sidemenu">
      <img src={getBackgroundImage()} alt="" />
    </div>
  );
};

export default SideMenu;
