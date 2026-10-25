import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Dashbaord_afteruserauth from "./Afterlogincomp/Dashbaord_afteruserauth";
import Goals from "./Afterlogincomp/Goals";
import ProtectesRoutes from "./ProtectedRoutes/ProtectesRoutes";
import Profile from "./Afterlogincomp/Profile";
import Budget from "./Afterlogincomp/Budget";
import Features from "./components/Features";
import Setting from "./Afterlogincomp/Setting";
import Anlaysis from "./Afterlogincomp/Anlaysis";

const data = localStorage.getItem("role");
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Demo/>}/> */}
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectesRoutes role={data} acess={"user"}>
              <Dashbaord_afteruserauth />
            </ProtectesRoutes>
          }
        >
          <Route path="goals" element={<Goals />} />
          <Route path="profile" element={<Profile />} />
          <Route path="budget" element={<Budget />} />
          <Route path="setting" element={<Setting/>} />
           <Route path="anlaysis" element={<Anlaysis/>} />
           
        </Route>
  
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
