import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import pancake from "../assets/login pic.svg";
import line from "../assets/line.svg";
import google from "../assets/google logo.svg";
import facebook from "../assets/facebook logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white  h-[100vh] flex items-center justify-center ">
      <div className="w-full flex justify-center bg-white">
        <div className="w-[50%] px-6 py-8 bg-white">
          <h2 className=" flex justify-center text-3xl text-black font-semibold mb-6">
            Login
          </h2>
          <form>
            Username
            <div className="mb-4">
              <label
                htmlFor="Username"
                className="block text-white text-sm font-medium mb-2"
              >
                Enter a unique username
              </label>
              <input
                type="text"
                name="Username"
                id="Username"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>{" "}
            Password
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              Do not have an accout yet?
              <Link classname=" text-emerald-500 " to="Register">
                Register here
              </Link>
            </div>
            <div>
              <Link className=" text-emerald-500 " to="Home">
                Continue as guest
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors mb-4"
              >
                Login
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
        <img
          src={pancake}
          alt="pancake"
          className="object-contain rounded-tl-md rounded-bl-md"
        />
      </div>
    </div>
  );
};

export default Login;
