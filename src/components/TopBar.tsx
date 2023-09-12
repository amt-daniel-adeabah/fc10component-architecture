import { useLocation } from "react-router-dom";
import "../assets/css/topbar.scss";
const TopBar = () => {
  const location = useLocation();
  return (
    <div className="top-bar">
      <div className="left-side">
        Step{" "}
        {location.pathname === "/photo"
          ? 2
          : location.pathname === "/interest"
          ? 3
          : 1}{" "}
        of 4
      </div>
      <div className="right-side">Exit</div>
    </div>
  );
};

export default TopBar;
