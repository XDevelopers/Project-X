import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Help from "./Component/Help/Help";
import Offers from "./Component/Offers/Offers";
import Favourite from "./Component/Favourite/Favourite";
import Profile from "./Component/Profile/Profile";
import Coupan from "./Component/Coupan/Coupan";
import Notification from "./Component/Notification/Notification";
import Login from "./Component/UserAuthentication/Login";
import Signup from "./Component/UserAuthentication/Signup";
import Mainbar from "./Component/Navbar/Mainbar";
import ProtectedRoutes from "./Component/ProtectedRoutes/Protected";
function App() {
  const [hidden, setHidden] = React.useState(true);
  return (
    <BrowserRouter>
      {/* Sidebar / Mainbar */}
      <Mainbar hidden={hidden} setHidden={setHidden}  />

      {/* Main content */}
      <div className="relative top-20 sm:top-25 pb-10  p-4 sm:left-[20%] sm:w-[80%] sm:overflow-x-hidden">
        <Routes>
          <Route path="/" element={<ProtectedRoutes><Home hidden={hidden} setHidden={setHidden} /> </ProtectedRoutes>} />
          <Route path="/help" element={<Help />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coupancode" element={<Coupan />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
