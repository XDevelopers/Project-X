import React, { use, useEffect } from 'react'
import Navbar from './Navbar'
import SidNavbar from './SidNavbar'

const Mainbar = ({hidden,setHidden}) => {

useEffect(() => {
  console.log("Sidebar hidden:", hidden);
}, [hidden]);

  return (
<>
<div className="maindiv top-0 flex z-99999 fixed w-full bg-red-700 h-20 ">
<div className={`left sm:flex w-20% sm:${()=>setHidden(false)} sm:w-[20%] h-screen`}><SidNavbar hidden={hidden} setHidden={setHidden}/></div>
<div className="right w-full sm:w-[80%] h-full">
<Navbar hidden={hidden} setHidden={setHidden}/></div>
</div>
</>
  )
}

export default Mainbar