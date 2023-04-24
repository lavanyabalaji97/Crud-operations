import React from "react";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Navbar } from "./Navbar"
function Home(){
    return(
        <>
        <Navbar/>
        <BrowserRouter>      
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
        </>
    )
}
export default Home;