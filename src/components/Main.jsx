import React from 'react'
import {
    Navbar,
    Home,
    About,
    Teacher,
    Contact,
    Courses,
    Footer,
  } from "./index";

const Main = () => {
  return (
    <div  className="font-Poppins bg-Solitude">
        <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main