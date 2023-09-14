import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import BlankPhoto from "../assets/images/empty-image.svg";
import "../components/css/Photo.scss";
import { FormPage } from "../types/Types";

const PageStates = {
  Register: "register",
  Photo: "photo",
  Interest: "interest",
  InterestPick: "interestPick",
  InterestSuccess: "interestSuccess",
};

const PhotoPage = ({
  formHomePage,
}: {
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>;
}) => {
  const currentPage = PageStates.Photo;

  return (
    <div className="sidemenu-container">
      <SideMenu
        registerPage={currentPage === PageStates.Register}
        photoPage={currentPage === PageStates.Photo}
        interestPage={currentPage === PageStates.Interest}
        interestPick={currentPage === PageStates.InterestPick}
        interestSuccess={currentPage === PageStates.InterestSuccess}
      />
      <div>
      <TopBar currentPage="photoPage" />
        <div className="photo-container">
          <div className="photo-column">
            <h1>Add Photo</h1>
            <p>Add a photo so other members know who you are</p>
            <img src={BlankPhoto} alt="" />

            <button
              className="upload"
              onClick={() =>
                formHomePage({
                  register: false,
                  photo: false,
                  interest_page: true,
                  interest_pick: false,
                  interest_success: false,
                })
              }
            >
              Upload a photo
            </button>
            <button
              className="skip"
              onClick={() =>
                formHomePage({
                  register: false,
                  photo: false,
                  interest_page: true,
                  interest_pick: false,
                  interest_success: false,
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
