import React from "react";
import "../SideMenu/SideMenu.scss";
import { FormPage } from "../../types/Types";
import backgroundImages from "./images/BackgroundImages";

interface SideMenuProps {
  currentPage: string;
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ currentPage }) => {
  const backgroundImagesMap = {
    registerPage: backgroundImages.WomanLaptop,
    photoPage: backgroundImages.BoyTablet,
    interestPage: backgroundImages.ManLaptop,
    interestPick: backgroundImages.WomanLaptopWhite,
    interestSuccess: backgroundImages.WomanHappy
  };

  const backgroundImage =
    backgroundImagesMap[currentPage as keyof typeof backgroundImagesMap] ||
    backgroundImages.WomanLaptop;

  return (
    <div className="sidemenu">
      <img src={backgroundImage} alt="" />
    </div>
  );
};

export default SideMenu;
