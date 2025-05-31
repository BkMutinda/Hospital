import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

const Login = () => {

  const [loginData, setloginData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: ""
  })

  
  const route = useNavigate();
  const handleSignup = () => {
    route('../signup');
  }
  const handleClient =  async (e) => {
    e.prevent
    route('../Client');
  }

  return (
    <>
    <div className='flex h-screen bg-background  ' >
      <motion.div
      initial={{x: -100, opacity: 0}}
      animate={{x: 30 , opacity: 1}}
      transition={{duration: 2.0}} 
      
      className="m-auto h-fit w-[35%] border-[1px] border-gray-300 py-10 px-10 rounded-sm  ">
        <form action="" method=''>
        <h3 className="text-3xl font-semibold border-b-[2px] border-gray-600 pb-2 " >Log In</h3>
          <div className=" flex mt-5 justify-between  ">
              <label htmlFor="f_name">First Name</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm "
                placeholder=" First Name"
                value={loginData.first_name}
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="l_name">Last Name</label>
              <input
                type="text"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder=" Last Name"
                value={loginData.last_name}
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter Email"
                value={loginData.email}
              />
            </div>
            <div className="flex mt-5 justify-between ">
              <label htmlFor="id" >
                ID
              </label>
              <input
                type="number"
                className="border-[1px] border-gray-500 rounded-sm  "
                placeholder="Enter ID"
                value={loginData.id}
              />
            </div>
            <p className='mt-7  ' >Don't have an account sign up <span className='text-primary hover:cursor-pointer transition-all ease-in-out duration-500 font-semibold ' onClick={handleSignup} >here</span></p>
            <div className="">
              <button type="submit" className=" m-auto mt-5 flex justify-center items-center text-2xl bg-primary hover:bg-green py-1 px-4 rounded-md hover:cursor-pointer transition-all ease-in-out duration-500 " onClick={handleClient}>Login</button>
            </div>
        </form>
      </motion.div>
    </div>
    </>
  )
}

export default Login