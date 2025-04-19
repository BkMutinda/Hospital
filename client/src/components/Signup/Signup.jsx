import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    id_number: '',
    email: ''
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

    try {
      //send a rquest to the backend with the form data

      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      //if successfull update status and reset form
      setStatus("data sumitted successfully ");
      setformData({ first_name: "", last_name: "", id_number: "", email: "" }); // clear the inputs
    } catch (error) {
      // handle errors such as network erros and backend errors
      console.error("submission error", error);
      setStatus("failed to submit data. Please try again");
    }
  };

  // //state variables for capturing form data
  // const [f_name, setf_Name] = useState("");
  // const [l_name, setl_Name] = useState("");
  // const [email, setEmail] = useState("");
  // const [id, setID] = useState("");

  // //handle form submition
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // prevent the default from submission behaviour

  //   //construct payload (form data)
  // const formData = {
  //   f_name,
  //   l_name,
  //   email,
  //   id,
  // };

  //   try {
  //     // send request to the back end server
  //     const response = await axios.get(
  //       'http://localhost:5000/submit',
  //       formData
  //     );

  //     //display success message.
  //     // alert(response.data);
  //     setMessage(response.data.message || "submitted succesgully");
  //   } catch (error) {
  //     console.error("Error submitting form", error);
  //     alert("COOKED BRO!! there was an error submitting the form.. CHECK THAT CODE !");

  //   }
  // };

  const route = useNavigate();
  const handleLogin = () => {
    route("../login");
  };
  const handleHome = () => {
    route("/");
  };

  return (
    <>
      <div className="h-screen bg-backgound flex ">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.0 }}
          className="border-[1px] border-gray-300 h-fit pb-5 m-auto w-[50%] mt-10 rounded-sm  "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[60%] m-auto mt-15  "
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
              />
            </div>
            {/* <div className="flex mt-5 justify-between ">
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
            </div> */}
            {status && <p className="text-red-700 text-lg font-semibold" >{status} </p>}
            <p className="mt-5 font-light ">
              Already have an account?{" "}
              <span
                className="text-primary font-semibold hover:cursor-pointer "
                onClick={handleLogin}
              >
                Log in
              </span>
            </p>
            <div className="flex ">
              <button
                type="button"
                className=" m-auto mt-5 flex justify-center items-center text-lg font-semibold bg-primary hover:text-white hover:bg-green py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500 "
                onClick={handleHome}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" m-auto mt-5 flex justify-center items-center text-lg font-semibold hover:text-white bg-primary hover:bg-green py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500  "
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
