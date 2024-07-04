import React from "react";

const RecipeItem = ({ recipe }) => {
  const BASEURL = "http://localhost:8000";
  return (
    <div className="p-4 bg-white border shadow-xl w-[20%]">
      <img
        className="rounded-md w-[70%]"
        alt={recipe.title}
        src={`${BASEURL}/${recipe.image}`}
      />
      <div className="text-black font-medium text-lg">{recipe.title}</div>
      <div className="text-black font-light text-base">
        By
        <div className=" font-light text-emerald-700">
          {recipe.username?.username}
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
