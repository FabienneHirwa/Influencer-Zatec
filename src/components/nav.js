import React from "react";

import {FaFacebookSquare,FaLinkedin,FaTwitterSquare } from "react-icons/fa";


function Nav() {
  return (
    <>
      <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#0c4a6e] ">
        <ul className="container px-4 mx-auto flex flex-wrap items-center justify-between text-white">
          <h1 className="text-2xl no-underline" href="">INFLUEN<strong className="text-[#fbbf24]">CERS!</strong></h1>
          <ul className="flex flex-wrap items-center no-underline text-white pl-20">
            <li><a href="#"><FaFacebookSquare size='2rem' color="white"  /></a></li>
            <li><a href="#"><FaLinkedin size='2rem' color="white"/></a></li>
            <li><a href="#"><FaTwitterSquare size='2rem' color="white" /></a></li>
</ul>
        </ul>
</div>
    </>
  );
}
    
    
  
  export default Nav;