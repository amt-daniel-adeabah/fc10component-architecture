import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import BlankPhoto from "../assets/images/empty-image.svg";
import "../components/css/Photo.scss";
import { FormPage } from "../types/Types";

const PhotoPage = ({
  formHomePage,
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {

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

              <button
                className="upload"
                onClick={() =>
                  formHomePage(prevState =>({
                    ...prevState,
                    photo: false,
                    interest_page: true,
                    pageNumber: 3
                  }))
                }
              >
                Upload a photo
              </button>
              <button
                className="skip"
                onClick={() =>
                  formHomePage(prevState =>({
                    ...prevState,
                    photo: false,
                    interest_page: true,
                    pageNumber: 3
                  }))
                }
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoPage;
