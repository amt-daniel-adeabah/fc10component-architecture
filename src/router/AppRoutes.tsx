import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from '../pages/Register';
import Photo from '../pages/PhotoPage';
import Interest from '../pages/InterestPage';

const AppRoutes = () => {
  return (
  <Router>
    <Routes>
        <Route path="/*" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/interest" element={<Interest />} />
    </Routes>
  </Router>
  )
}

export default AppRoutes