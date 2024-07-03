import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import pancake from "../assets/login pic.svg";
import line from "../assets/line.svg";
import google from "../assets/google logo.svg";
import facebook from "../assets/facebook logo.svg";

const Register = () => {
  console.log("first");
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext); //to keep track of the user

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true); // the slash refers to home page , check its route!
      navigate("/Home");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-white  h-[100vh] flex items-center justify-center ">
      <div className="w-full flex justify-center bg-white">
        <div className="w-[50%] px-6 py-8 bg-white">
          <h2 className=" flex justify-center text-3xl text-black font-semibold mb-6 ">
            Create an Account
          </h2>
          <form onSubmit={handleFormSubmit}>
            Username
            <div className="mb-4">
              <input
                type="text"
                name="username"
                id="Username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Enter your Password
            <div className="mb-6">
              <input
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Confirm your Password
            <div className="mb-6">
              <input
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className=" mb-6 ">
              Already have an account? {}
              <Link classname=" text-emerald-400 " to="Login">
                Login Here!
              </Link>
            </div>
            <div className=" mb-6">
              <Link className=" text-black " to="Home">
                Continue as a guest
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" w-full px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-500 transition-colors mb-4"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-1">
            <div>
              <img src={line} className="h-full w-full" />
            </div>
            or
            <div>
              <img src={line} className="h-full w-full" />
            </div>
          </div>
          <div className="flex justify-center align-middle items-center ml-9">
            <div>
              <img src={google} className="h-full w-[50%]" />
            </div>
            <div>
              <img src={facebook} className="h-full w-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-[100vh] overflow-hidden">
        <img src={pancake} alt="pancake" className="object-contain " />
      </div>
    </div>
  );
};

export default Register;
