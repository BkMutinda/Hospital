import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    id_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle for submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //prvent the form from submitting without the js
    setStatus("submittting..."); //show lpoading state to the user

    if (formData.password == formData.confirm_password) {
      try {
        //send a rquest to the backend with the form data

        const response = await axios.post(
          "http://localhost:5000/submit",
          formData
        );
        //if successfull update status and reset form
        setStatus("data sumitted successfully ");
        setformData({
          first_name: "",
          last_name: "",
          id_number: "",
          email: "",
          password: "",
          confirm_password: "",
        }); // clear the inputs
      } catch (error) {
        // handle errors such as network erros and backend errors
        console.error("submission error", error);
        setStatus("failed to submit data. Please try again");
      }
    } else {
      setStatus(" Password does not match ");
    }
  };

  const route = useNavigate();
  const handleLogin = () => {
    route("../login");
  };
  const handleHome = () => {
    route("/");
  };

  return (
    <>
      <div className="h-screen bg-backgound flex flex-col ">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.0 }}
          className="border-[1px] border-gray-300 h-fit pb-5 m-auto w-[50%] mt-5 rounded-sm  "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col cols-2b w-[60%] m-auto mt-10  "
          >
            <h3 className="text-3xl font-semibold border-b-[2px] border-gray-600 pb-2 ">
              Sign Up
            </h3>
            <div className=" flex mt-5 justify-between  ">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm "
                placeholder=" First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                autoFocus
                required
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder=" Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="id">ID</label>
              <input
                type="number"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter ID"
                name="id_number"
                value={formData.id_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="id">Password</label>
              <input
                type="password"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="id"> Confirm Password</label>
              <input
                type="password"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Confirm Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex mt-5 ">
              <input type="checkbox" className="bg-primary" />{" "}
              <p className="text-sm   ">
                I agree to{" "}
                <span className="font-light hover:cursor-pointer hover:text-green ">
                  <u>Terms and Conditions</u>{" "}
                </span>{" "}
                and
                <span className="font-light hover:cursor-pointer hover:text-green ">
                  {" "}
                  <u>Privacy Policy</u>{" "}
                </span>{" "}
              </p>
            </div>
            <div className="flex ">
              <button
                type="submit"
                className=" m-auto mt-5 flex justify-center items-center text-lg font-semibold hover:text-white bg-primary hover:bg-green py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500  "
              >
                Sign Up
              </button>
            </div>
            {/* <div className="flex m-auto mt-5 justify-around  ">
              <hr className="w-[27%]  border-1 text-gray-500 mt-3.5 " />
              <p className="flex justify-center ">Sign in with</p>
              <hr className="w-[27%]  border-1 text-gray-500 mt-3.5 " />
            </div> */}
            {/* <button className="w-[40%] border-gray-500 border-1 m-auto mt-5 flex justify-center items-center text-2xl py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500 ">
              Google
            </button> */}
            <p className="mt-5 font-light ">
              Already have an account?{" "}
              <span
                className="text-primary font-semibold hover:cursor-pointer "
                onClick={handleLogin}
              >
                Log in
              </span>
            </p>
          </form>
        </motion.div>
        <div className=" ">
          {status && (
            <p className="flex text-red-700 text-lg font-semibold  bg-primary mb-10 mr-5 py-2 px-2 float-right rounded-sm w-fit ">
              {status}{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
