import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const Login = () => {
  const [loginData, setloginData] = useState({
    id_number: "",
    password: "",
  });

  const [showPassword, setshowPassword] = useState(false);

  //TOOGLING THE PASSORD
  const tonglePassword = () => {
    setshowPassword(prev >= !prev);
  };

  //ROUTES

  const route = useNavigate();
  const handleSignup = () => {
    route("../signup");
  };
  const handleClient = async (e) => {
    // e.preventdefault();
    route("../Client");
  };

  const handleChange = (e) => {
        setloginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }



  return (
    <>
      <div className="flex h-screen bg-background ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 30, opacity: 1 }}
          transition={{ duration: 2.0 }}
          className="m-auto h-fit w-[25%] border-[1px] border-gray-300 py-5 px-10 rounded-sm bg-gray-300  "
        >
          <form  className="  ">
            <div className="">
              <h3 className="text-3xl font-semibold pb-2 ">Sign In</h3>
              <p className="text-s"> Welcome back, you've been missed</p>
            </div>

            <div className=" mt-10 justify-between ">
              <label htmlFor="id">ID</label>
              <br />
              <input
                type="text"
                className=" w-[100%] border-[1px] border-gray-500 rounded-sm mt-2 "
                placeholder="Enter ID"
                name="id_number"
                value={loginData.id}
                onChange={handleChange}
                autoFocus
              />
            </div>
            <div className="mt-5 justify-between bg-gree relative ">
              <label>Password</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                className=" w-[100%] mt-2 border-[1px] border-gray-500 rounded-sm "
                placeholder=" Enter Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
              <FontAwesomeIcon
                // icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-5 bottom-[15%] hover:cursor-pointer text-gray-500 "
                onClick={tonglePassword}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="w-[90%] m-auto mt-5 flex justify-center items-center text-2xl bg-primary hover:bg-gray-500 py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500 "
                onClick={handleClient}
              >
                Login
              </button>
              <div className="flex justify-between mt-5">
                <div className="flex">
                  <input type="checkbox" />
                  <p className="ml-2">remember me</p>
                </div>
                <div className="">
                  <p className="text-primary hover:cursor-pointer transition-all ease-in-out duration-500 font-semibold ml-1 underline" >Forgot Password?</p>
                </div>
              </div>
              <div className="flex m-auto mt-5 justify-around  ">
                  <hr className="w-[27%]  border-1 text-gray-500 mt-3.5 " />
                <p className="flex justify-center ">Sign in with</p>
                  <hr className="w-[27%]  border-1 text-gray-500 mt-3.5 " />
              </div>
              <button 
              className="w-[40%] border-gray-500 border-1 m-auto mt-5 flex justify-center items-center text-2xl py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500 ">
                Google
              </button>
            </div>
            <p className="mt-7 flex justify-center ">
              Don't have an account ?{" "}
              <span
                className="text-primary hover:cursor-pointer transition-all ease-in-out duration-500 font-semibold ml-1 underline"
                onClick={handleSignup}
              >
                sign up
              </span>
            </p>
          </form>
        </motion.div>
      </div>
    </>
  );
};

// carol 0108222444
// ben  0745406491
// isinya feeds  acacia stage --

export default Login;

