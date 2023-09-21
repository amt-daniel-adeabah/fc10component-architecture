import React from "react";
import BlankPhoto from "../../../assets/images/empty-image.svg";
import "../Photo/Photo.scss";
import { FormPage } from "../../../types/Types";
import { handleFormHomePagePhoto } from "../../../utils/formHelpers";

const PhotoPage = ({ formHomePage }: { formHomePage: React.Dispatch<React.SetStateAction<FormPage>> }) => {
  const handleClick = handleFormHomePagePhoto(formHomePage);

  return (
    <div className="photo-content">
      <h1>Add Photo</h1>
      <p>Add a photo so other members know who you are</p>
      <img src={BlankPhoto} alt="" />

      <button className="upload" onClick={handleClick}>
        Upload a photo
      </button>
      <button className="skip" onClick={handleClick}>
        Skip
      </button>
    </div>
  );
};

export default PhotoPage;
