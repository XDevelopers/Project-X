import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <div className="flex flex-col relative z-10">
      <HomeNavbar />
      <HomeProduct />
    </div>
  );
};

export default Home;
