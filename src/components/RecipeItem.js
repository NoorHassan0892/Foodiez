import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div className="col-lg-4 col-md-8 col-sm-10">
        <div className="single-doctor">
          <img className="image" alt={recipe.name} src={recipe.image} />
          <div className="content">
            <h3>{recipe.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
