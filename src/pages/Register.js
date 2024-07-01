import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

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
    mutationFn: register(userInfo),
    onSuccess: () => {
      setUser(true); // the slash refers to home page , check its route!
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-white min-h-screen h-full flex items-center justify-center"></div>
  );
};

export default Register;
