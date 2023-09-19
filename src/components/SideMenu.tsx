import "../components/css/SideMenu.scss";

import WomanLaptop from "../assets/images/woman-hold-laptop.svg";
import WomanLaptopWhite from "../assets/images/woman-hold-laptop-white.svg";
import WomanHappy from "../assets/images/woman-happy.svg";
import BoyTablet from "../assets/images/boy-hold-tablet.svg";
import ManLaptop from "../assets/images/man-hold-laptop.svg";

const backgroundImages: Record<string, string> = {
  registerPage: WomanLaptop,
  photoPage: BoyTablet,
  interestPage: ManLaptop,
  interestPick: WomanLaptopWhite,
  interestSuccess: WomanHappy
};

const SideMenu = ({
  registerPage,
  photoPage,
  interestPage,
  interestPick,
  interestSuccess
}: {
  registerPage: boolean;
  photoPage: boolean;
  interestPage: boolean;
  interestPick: boolean;
  interestSuccess: boolean;
}) => {
  const currentPage =
    (registerPage && "registerPage") ||
    (photoPage && "photoPage") ||
    (interestPage && "interestPage") ||
    (interestPick && "interestPick") ||
    (interestSuccess && "interestSuccess") ||
    "";

  const backgroundImage = backgroundImages[currentPage];

  return (
    <div className="sidemenu">
      <img src={backgroundImage} alt="" />
    </div>
  );
};

export default SideMenu;
