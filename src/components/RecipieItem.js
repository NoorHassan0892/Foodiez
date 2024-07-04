import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RecipieItem = ({ id, image, title, username, preptime }) => {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 w-64 text-center shadow-lg ">
      <div className=" w-full h-40 object-cover rounded-t-lg"> {image} </div>
      <div className=" text-xl font-semibold mt-4 text-left "> {title} </div>
      <div className="text-gray-600 mt-2 text-left"> By: {username} </div>
      <div className="text-gray-600 mt-2 text-left">
        {" "}
        Prep Time: {preptime}{" "}
      </div>
      <div className=" text-center mt-2">
        <button
          className=" h-9 w-[70%] bg-amber-400 hover:bg-amber-500 rounded-md shadow-md "
          onClick={() => navigate(`/onerecipe/${id}`)}
        >
          View the Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipieItem;
