import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css"
import { useNavigate } from "react-router-dom";


const Nav = () => {

const route = useNavigate();
const handleLogin = () => {
  route('login');
}
const handleSignup = () => {
  route('signup');
}
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
        <div className="btns flex gap-2">
          <button  type="button" onClick={handleSignup} >Sign UP</button>
          <button type="button" onClick={handleLogin} >Log In</button>
        </div>
      </div>
    </section>
    </>
  )
};

export default Nav;
