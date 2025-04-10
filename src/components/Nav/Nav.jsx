import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css"


const Nav = () => {
  return(
    <>
    <section className="  ">
      <div className="text-black  font-semibold text-md  justify-around flex items-center bg-green  h-25 ">
        <div className=" h-fit">
          LOGO
        </div>
        <div className="">
          <ul className=" flex gap-10    ">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACTS</li>
          </ul>
        </div>
        <div className=" flex gap-2">
          <button  type="button">Sign UP</button>
          <button type="button">Log In</button>
        </div>
      </div>
    </section>
    </>
  )
};

export default Nav;
