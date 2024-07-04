import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div className="bg-transparent flex flex-col font-Poppins p-4 mb-4 min-w-[300px]">
        <img className="rounded-md" alt={recipe.name} src={recipe.image} />
        <div className="text-black font-medium text-lg"></div>
        <div className="text-black font-light text-base">
          By
          <div className=" font-light text-emerald-700">{recipe.user}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
