import React, { useState } from "react";
import data from "./fakeHomeData";
import CustomPopup from "../../Custom/CustomPopup";
import Login from "../UserAuthentication/Login";
const HomeCart = () => {
  const [cartdata, setCartdata] = React.useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="main flex p-0 justify-evenly items-center flex-wrap w-full">
      {data?.map((item) => {
        return (
            <>

          <div className="cart border-none rounded-2xl p-4  bg-gray-900 h-full sm:w-60  m-4 w-[38%] inline-block">
            <img
              src={item.image}
              alt={item.name}
              className="w-full top-0 bg-amber-300  rounded-full h-full object-cover"
            />
            <h2 className="font-bold text-[0.5em] p-2  mt-2">{item.name}</h2>
            <p className="text-gray-50 text-[0.5em]">{item.discription}</p>
            <div className="main flex justify-between items-center mt-2">
            <p className="text-green-600 font-semibold mt-2 sm:text-[1em] text-[0.5em]">${item.price}</p>
            <button className="bg-red-500 text-[0.5em] py-1 sm:text-[1em]  px-2 rounded-sm sm:py-1.5 border-none font-semibold text-sm sm:px-4" onClick={()=>setOpen(true)}>Buy</button></div>
          </div>
          <CustomPopup open={open} setOpen={setOpen} title={item.name} content={<Login/>}/>
          </>
        );
      })}
    </div>
  );
};

export default HomeCart;
