import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from '../pages/Register';
import Photo from '../pages/PhotoPage';
import Interest from '../pages/Interest/InterestPage';
import InterestPick from "../pages/Interest/InterestPick";
import InterestSuccess from "../pages/Interest/InterestSuccess";

const AppRoutes = () => {
  return (
  <Router>
    <Routes>
        <Route path="/*" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/interest/pick" element={<InterestPick />} />
        <Route path="/interest/success" element={<InterestSuccess />} />
    </Routes>
  </Router>
  )
}

export default AppRoutes