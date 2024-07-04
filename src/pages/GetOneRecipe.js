import React from "react";
import { fetchRecipe } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoryHeader from "../components/CategoryHeader";
import Searchbar from "../components/Searchbar";

const OneRecipe = () => {
  const { recipeId } = useParams();
  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => fetchRecipe(recipeId),
  });
  if (isLoading) {
    return <div className="text-center"> is Loading .. </div>;
  }

  return (
    <>
      <CategoryHeader />
      <div className="max-w-4xl mx-auto p-4">
        <div>
          <header className="bg-black text-white"></header>
        </div>

        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4">{recipe?.title}</h1>
          <img
            src={recipe?.image}
            alt={recipe?.title}
            className="w-full h-auto rounded-lg"
          />
        </header>
        <div className="my-8">
          <p className="text-lg">{recipe?.overview}</p>
          <div className="flex justify-between mt-4">
            <div>Prep Time: {recipe?.prepTime}</div>
            <div>Cook Time: {recipe?.cookTime}</div>
            <div>Servings: {recipe?.servings}</div>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe?.instructions?.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {recipe?.reviews?.map((review, index) => (
            <div key={index} className="mb-4 p-4 border-b">
              <p className="mb-2">{review.text}</p>
              <span>Rating: {review.rating}</span>
            </div>
          ))}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Your Review</h3>
            <textarea
              placeholder="Write your review here..."
              className="w-full h-24 p-2 border rounded mb-2"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Post Review
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OneRecipe;
