import { useLocation } from 'react-router-dom';
import '../assets/css/SideMenu.scss';

import WomanLaptop from '../assets/images/woman-hold-laptop.svg';
import WomanLaptopWhite from '../assets/images/woman-hold-laptop-white.svg';
import WomanHappy from '../assets/images/woman-happy.svg';
import BoyTablet from '../assets/images/boy-hold-tablet.svg';
import ManLaptop from '../assets/images/man-hold-laptop.svg';

const backgroundImages: { [key: string]: string } = {
  '/register': WomanLaptop,
  '/photo': BoyTablet,
  '/interest': WomanLaptopWhite,
  '/interest/pick': ManLaptop,
  '/interest/success': WomanHappy,
};

const SideMenu = () => {
  const location = useLocation();
  const backgroundImage = backgroundImages[location.pathname] || WomanLaptop;

  return (
    <div className="sidemenu">
      <img src={backgroundImage} alt="" />
    </div>
  );
};

export default SideMenu;
