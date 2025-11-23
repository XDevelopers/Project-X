import React from 'react'

import { AiFillHome } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';



 const Navbar = ({hidden,setHidden}) => {
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "Jan", "Feb", "March", "April", "May", "June",
  "July", "August", "Sep", "Oct", "Nov", "Dec"
];

const today = new Date();

// if(filtershow===true){
//   setTimeout(() => {
//     setFiltershow(false);
//   }, 1500);
// }

const dayName = days[today.getDay()];

const monthName = months[today.getMonth()];
console.log(dayName,monthName)
  const year=new Date().getFullYear();

  return (
    <>
<div className="main flex flex-col border-b-2  border-gray-600 sm:flex-row items-center justify-between bg-gray-800 p-4 sm:h-20 w-full">
  {/* Left Section - Title */}
  <div className="flex items-center justify-between w-full sm:w-[30%]">
    <div>
      <h1 className="text-2xl font-medium text-white">Berry Blast</h1>
      <p className="text-gray-400 text-sm font-medium">
        {`${dayName}, ${today.getDate()}-${monthName}-${year}`}
      </p>


      
    </div>
  

    {/* Cart Icon (visible on mobile only) */}
    <div className="relative sm:hidden flex gap-4 p">
        <div className="hamburgur sm:hidden items-center" onClick={()=>setHidden(!hidden)}>
      <div className="line1 bg-white mb-1 h-1 w-7"></div>
      <div className="line2 bg-white mb-1 h-1 w-7"></div>
      <div className="line3 bg-white h-1 w-5"></div>


      
    </div>
      
    
    </div>
  </div>
  <div className="UserInfo justify-center items-center gap-5 bg-gray-900 p-4 rounded-2xl sm:flex hidden">
  <Link to={"/login"}><CgProfile className="text-4xl text-white ml-4 "/></Link>  
  <div className="userEtxt flex gap-1">
    <h1 className='bg-green-500 py-1.5 px-3 rounded-2xl font-medium'>Abhishek Pal</h1>
  </div>
</div>


  {/* Middle Section - Search + Filter */}
 
</div>

{/* Filter Dropdown */}



<div className="moblienav w-full fixed bottom-0 h-12   sm:hidden bg-red-700 ">
  <ul className='flex justify-between p-2 items-center bg-red-500  rounded-2xl'>

   <Link to={"/"}><li ><AiFillHome className="text-4xl"/></li></Link> 
   <Link to={"/offers"}><li><BiSolidOffer className="text-4xl"/></li></Link>
    <Link to={"/login"}><li><CgProfile className="text-4xl"/></li></Link>
  </ul>
</div>

    </>
  )
}

export default Navbar
