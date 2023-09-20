import React from "react";
import SideMenu from "../../../components/SideMenu/SideMenu";
import TopBar from "../../../components/TopBar/TopBar";
import BlankPhoto from "../../../assets/images/empty-image.svg";
import "../Photo/Photo.scss";
import { FormPage } from "../../../types/Types";

const PhotoPage = ({
  formHomePage
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  return (
    <div className="sidemenu-container">
      <SideMenu currentPage="photoPage" formHomePage={formHomePage} />
      <div>
        <TopBar currentPage="photoPage" formHomePage={formHomePage} /> 
        <div className="photo-container">
          <div className="photo-column">
            <h1>Add Photo</h1>
            <p>Add a photo so other members know who you are</p>
            <img src={BlankPhoto} alt="" />

            <button
              className="upload"
              onClick={() =>
                formHomePage({
                  registerPage: false,
                  photoPage: false,
                  interestPage: true,
                  interestPick: false,
                  interestSuccess: false
                })
              }
            >
              Upload a photo
            </button>
            <button
              className="skip"
              onClick={() =>
                formHomePage({
                  registerPage: false,
                  photoPage: false,
                  interestPage: true,
                  interestPick: false,
                  interestSuccess: false
                })
              }
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
