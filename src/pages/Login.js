import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import pancake from "../assets/login pic.svg";
import line from "../assets/line.svg";
import google from "../assets/google logo.svg";
import facebook from "../assets/facebook logo.svg";
import logo from "../assets/black logo.svg";
import yellow from "../assets/yellow shape.svg";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["Login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/Home");
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-white h-[100vh] flex items-center justify-center relative">
      <img src={logo} alt="logo" className="absolute top-4 left-4 w-48" />
      <div className="w-full flex justify-center bg-white">
        <div className="w-[50%] px-6 py-8 bg-white">
          <h2 className="flex justify-center text-3xl text-black font-semibold mb-6">
            Login
          </h2>
          <form onSubmit={handleFormSubmit}>
            Username
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                id="Username"
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Password
            <div className="mb-6">
              <input
                name="password"
                type="password"
                id="password"
                value={userInfo.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              Do not have an account yet?{" "}
              <Link className="text-emerald-800" to="Register">
                Register here
              </Link>
            </div>
            <div>
              <Link className="text-emerald-800" to="Home">
                Continue as guest
              </Link>
            </div>
            <div className="w-full bg-transparent px-4 py-2 flex justify-center"></div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#EBC76B] text-black rounded-md hover:bg-amber-500 transition-colors mb-4"
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
      <div className="w-[50%] h-[100vh] overflow-hidden">
        <img src={pancake} alt="pancake" className="object-contain" />
      </div>
    </div>
  );
};

export default Login;
