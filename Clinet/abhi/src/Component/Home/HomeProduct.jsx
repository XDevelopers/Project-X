import React, { useState } from 'react'
import Home from './Home'
import HomeCart from './HomeCart'
import CustomPopup from '../../Custom/CustomPopup'

function HomeProduct() {
  const [open, setOpen] = useState(false);

  return (
    <>

<div className="mainProductHome mt-10 relative z-0 w-full h-auto">
  <ul className="hidden sm:flex justify-start space-x-40 border-b-2 border-gray-700 pb-4 font-medium">
    <li>Cold-pressed</li>
    <li>Smooth</li>
    <li>Fruits</li>
    <li>Cold</li>
  </ul>
  <div className="carts ">
    <HomeCart />
  </div>
</div>

    </>
  )
}

export default HomeProduct