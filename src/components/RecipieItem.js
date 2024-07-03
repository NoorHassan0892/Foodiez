import React from "react";

const RecipieItem = ({ image, title, username, preptime }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 w-64 text-center shadow-lg ">
      <div className=" w-full h-40 object-cover rounded-t-lg"> {image} </div>
      <div className=" text-xl font-semibold mt-4 text-left "> {title} </div>
      <div className="text-gray-600 mt-2 text-left"> By: {username} </div>
      <div className="text-gray-600 mt-2 text-left">
        {" "}
        Prep Time: {preptime}{" "}
      </div>
    </div>
  );
};

export default RecipieItem;
