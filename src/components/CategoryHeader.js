import React from "react";
import logo from "../assets/white logo.svg";
import pic from "../assets/Apple store.svg";
import { useNavigate } from "react-router-dom";

const CategoryHeader = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  return (
    <div className="bg-[#111214] flex items-center justify-between h-20 w-full">
      <div className=" bg-transparent  w-[7%]">
        <img src={logo} />
      </div>
      <div className="w-[50%] flex justify-items-end gap-3  h-full">
        <button
          onClick={() => navigate("/recipes/create")}
          className="bg-yellow-500 h-10 border border-yellow-500 rounded-xl "
        >
          Add Recipe
        </button>
        <button
          onClick={() => navigate("/recipes/create")}
          className="bg-[#111214] border w-20 rounded-xl h-10 text-white "
        >
          Profile
        </button>
      </div>
    </div>
  );
=======
  return <div className="bg-[#111214] h-12 w-full">
    
  </div>;
>>>>>>> origin/main
};

export default CategoryHeader;
