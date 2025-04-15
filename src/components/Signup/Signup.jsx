import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Signup = () => {
  const route = useNavigate();
  const handleLogin = () => {
    route("../login");
  };
  return (
    <>
      <div className="h-screen bg-backgound flex ">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.0 }}
          className="border-[1px] border-gray-300 h-fit pb-5 m-auto w-[50%] mt-10 rounded-sm  "
        >
          <form
            action=""
            method=""
            className="flex flex-col w-[60%] m-auto mt-15  "
          >
            <h3 className="text-3xl font-semibold border-b-[2px] border-gray-600 pb-2 ">
              Sign Up
            </h3>
            <div className=" flex mt-5 justify-between  ">
              <label htmlFor="f_name">First Name</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm "
                placeholder=" First Name"
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="l_name">Last Name</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder=" Last Name"
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter Email"
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="id">ID</label>
              <input
                type="number"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter ID"
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter Password "
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="f_name">Confirm Pasword</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm "
                placeholder="Confirm Password"
              />
            </div>
            <p className="mt-5 font-light ">
              Already have an account?{" "}
              <span
                className="text-primary font-semibold hover:cursor-pointer "
                onClick={handleLogin}
              >
                Log in
              </span>
            </p>
            <div className=" ">
              <button
                type="submit"
                className=" m-auto mt-5 flex justify-center items-center text-2xl bg-primary hover:bg-green py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500 "
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;
