// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register from '../pages/Register';
// import Photo from '../pages/PhotoPage';
// import Interest from '../pages/Interest/InterestPage';
// import InterestPick from "../pages/Interest/InterestPick";
// import InterestSuccess from "../pages/Interest/InterestSuccess";
// import { FormPage } from "../types/Types";

// const AppRoutes = ({setFormPage}:{setFormPage:React.Dispatch<React.SetStateAction<FormPage>>}) => {
//   return (
//   <Router>
//     <Routes>
//         <Route path="/*" element={<Register />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/photo" element={<Photo formHomePage={setFormPage}/>} />
//         <Route path="/interest" element={<Interest formHomePage={setFormPage}/>} />
//         <Route path="/interest/pick" element={<InterestPick formHomePage={setFormPage}/>} />
//         <Route path="/interest/success" element={<InterestSuccess formHomePage={setFormPage}/>} />
//     </Routes>
//   </Router>
//   )
// }

// export default AppRoutes