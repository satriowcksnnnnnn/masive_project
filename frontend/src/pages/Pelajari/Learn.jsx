import React from 'react'
import Pelajari from "../../component/Pelajari"
import Navbar from "../../component/Navbar"
import NavbarLog from '../../component/NavbarLog'
import Footer from "../../component/Footer"

export default function Learn() {
  return (
    <>
    <div className="hidden md:block">
      <NavbarLog />
    </div>
    <Pelajari/>
    <Footer/>
    </>
  )
}
