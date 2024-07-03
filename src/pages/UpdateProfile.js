import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../api/auth";
import UserContext from "../context/UserContext";

const UpdateProfile = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["UpdateProfile"],
    mutationFn: () => updateProfile(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/getuser");
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <div>
        <h1>Edit Your profile</h1>
      </div>
      <div className=" flex flex-col justify-center ">
        <img
          className=" size-20"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        ></img>
        <h3>Profile Photo</h3>
      </div>
      <div className="flex justify-center">
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>
      <div class="columns-2">
        <div class="input-container">
          <h4> Name</h4>
          <input name="firstname" id="" type="text" onChange={handleChange} />
        </div>
      </div>
      <div class="input-container">
        <h4>Website</h4>
        <input name="website" type="text" onChange={handleChange} />
      </div>
      <div class="input-container">
        <h4>About Me</h4>
      </div>
      <div class="input-container">
        <input name="bio" type="text" onChange={handleChange} />
      </div>
      <div class="button-container">
        <button onClick={mutate} type="submit">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
