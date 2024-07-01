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
    <div className="bg-white min-h-screen h-full flex items-center justify-center">
      <div className="w-full flex justify-center px-6 py-8 bg-white rounded-md shadow-md">
        <div className="w-[50%] px-6 py-8 bg-white rounded-md shadow-md">
          <h2 className=" flex justify-center text-3xl text-black font-semibold mb-6">
            Login
          </h2>{" "}
          <form>
            E-mail Address
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Enter your e-mail
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              Do not have an accout yet?
              <Link classname="" to="Register">
                {" "}
                Register here
              </Link>
            </div>
            <div>
              <Link className=" text-emerald-500 " to="Register">
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
          <div className="flex justify-items-center justify-center ">
            <div>
              <img src={google} className="h-full w-[50%]" />
            </div>
            <div>
              <img src={facebook} className="h-full w-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] h-full rounded-md ">
        <img src={pancake} alt="pancake" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Login;
