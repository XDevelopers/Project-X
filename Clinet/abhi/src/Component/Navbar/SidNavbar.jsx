import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { RiCoupon3Fill } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import CustomPopup from "../../Custom/CustomPopup";

// const [hidden,setHidden]=React.useState(true);
const SidNavbar = ({ hidden, setHidden }) => {
const [open, setOpen] = React.useState(false);
  const handleNavClick = () => {
    setHidden(true);
    setOpen(!open);

  }
  return (
    <>
       <CustomPopup
        open={open}
        setOpen={setOpen}
        title="Filter"
        contant={<p>hello</p>}
        />
    <div
      className={`h-screen fixed  ${
        hidden ? "-translate-x-full" : "translate-x-0"
      } sm:translate-x-0 p-2 sm:p-6 sm:w-[20%] ease-in duration-200  w-[50%] bg-gray-900`}
    >
      <ul className="h-full flex flex-col justify-start gap-10 cursor-pointer font-medium ">
        <li
          className="p-[6px 12px] w-6 items-center sm:hidden text-center bg-red-500 rounded-2xl"
          onClick={() => setHidden(true)}
        >
          {" "}
          <RxCross2 className="text-2xl font-bold " />
        </li>
        <Link to={"/"}>
          {" "}
          <li className="flex flex-row gap-2 items-center">
            {" "}
            <AiFillHome className="text-2xl" onClick={handleNavClick} /> Home
          </li>
        </Link>
        <Link to={"/Offers"}>
          {" "}
          <li className="flex flex-row gap-2 items-center" onClick={handleNavClick}>
            {" "}
            <BiSolidOffer className="text-2xl" /> Offers
          </li>
        </Link>{" "}
        <Link to={"/notification"}>
          {" "}
          <li className="flex flex-row gap-2 items-center" onClick={handleNavClick}>
            {" "}
            <IoNotifications className="text-2xl" /> Notification
          </li> 
        </Link>{" "}
        <Link to={"/coupancode"}>
          {" "}
          <li className="flex flex-row gap-2 items-center" onClick={handleNavClick}>
            {" "}
            <RiCoupon3Fill className="text-2xl" /> Coupan Code
          </li>
        </Link>
        <Link to={"/favourite"}>
          {" "}
          <li className="flex flex-row gap-2 items-center" onClick={handleNavClick}>
            {" "}
            <GrFavorite className="text-2xl " /> favourate
          </li>
        </Link>{" "}
          <Link to={"/help"}>
            {" "}
            <li className="flex flex-row gap-2 items-center" onClick={handleNavClick}>
              {" "}
              <MdHelp className="text-2xl" /> Help
            </li>
          </Link>
        <Link to={"/logout"}>
          {" "}
          <li className="flex flex-row gap-2 items-center text-red-500" onClick={handleNavClick}>
            {" "}
            <HiOutlineLogout className="text-2xl text-red-500" /> LogOut
          </li>
        </Link>{" "}
      </ul>
    </div>
    </>
  );
};

export default SidNavbar;
