import { React, useState } from "react";
import line2 from "../assets/line2.svg";
import { MultiSelect } from "react-multi-select-component";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/categories";
import { addIngredient, getAllIngredients } from "../api/ingredients";
import { addrecipe } from "../api/recipes";

const AddRecipe = () => {
  const [image, setImage] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState({
    "input Name": " user value",
  });
  const [selectedIngredients, setselectedIngredients] = useState([]);
  const { data: categories, refetch: refetchCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const { data: ingredients, refetch: refetchIngredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getAllIngredients(),
  });

  const { mutate } = useMutation({
    mutationFn: (name) => addIngredient(name),
    onSuccess: () => {
      refetchIngredients();
    },
  });

  const { mutate: createRecipe } = useMutation({
    mutationFn: () =>
      addrecipe(
        image,
        selectedIngredients.map((a) => {
          return a?.value;
        }),
        recipeInfo
      ),
  });

  const handleImageChnage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleRecipeInfo = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe();
  };

  return (
    <div className="bg-red-500  h-full flex flex-col items-center font-Poppins ">
      <div className="w-full h-full flex justify-center py-7 bg-white">
        <div className="w-[35%] px-6 py-8 bg-white border shadow-xl  ">
          <h2 className=" flex justify-center text-3xl text-black font-semibold mb-6 font-Cormorant">
            Add a Recipe
          </h2>
          <hr className="mb-1" />
          {/* handle image */}
          <div className="w-full h-[250px] bg-amber-100 flex justify-center items-center border border-dashed rounded-sm relative">
            {image && (
              <label
                htmlFor="addImgaeInput"
                className="w-full h-full absolute z-0 "
              >
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </label>
            )}

            <label
              htmlFor="addImgaeInput"
              className="px-3 py-2 bg-[#EBC76B] rounded-full text-white cursor-pointer text-[10px]"
            >
              + Add image
            </label>
            <input
              id="addImgaeInput"
              type="file"
              className="hidden"
              onChange={handleImageChnage}
            />
          </div>
          {/* handle recipe info */}
          <form onSubmit={handleSubmit}>
            <div className="pt-2">Recipe Title</div>
            {/* title */}
            <div className="mb-4">
              <input
                placeholder="Enter your recipe title"
                type="text"
                name="title"
                onChange={handleRecipeInfo}
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Overview
            <div className="mb-6">
              <input
                placeholder="Describe your recipe"
                name="overview"
                type="text"
                onChange={handleRecipeInfo}
                className="w-full h-[100px] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* servings */}
            <hr className="mb-1" />
            <div className="flex pt-2 gap-2">
              Servings
              <div className="mb-4">
                <input
                  placeholder=""
                  type="number"
                  name="servings"
                  onChange={handleRecipeInfo}
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            {/* cuisine */}
            <div className="flex pt-2 gap-2">
              Cuisine:
              <div className="mb-4">
                <select name="cuisine" onChange={handleRecipeInfo}>
                  {categories?.map((category) => {
                    return (
                      <option value={category._id}>{category.name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* cook time */}
            <div className="flex pt-2 gap-2">
              Cook Time
              <div className="mb-4">
                <input
                  placeholder=""
                  type="text"
                  name="cookTime"
                  onChange={handleRecipeInfo}
                  id="cookTime"
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            {/* prep time */}
            <div className="flex pt-2 gap-2">
              Prep Time
              <div className="mb-4">
                <input
                  placeholder=""
                  type="text"
                  name="prepTime"
                  onChange={handleRecipeInfo}
                  id="prepTime"
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <hr className="mb-1" />
            {/* Ingredients */}
            <div className=" flex flex-col pt-2 gap-2">
              Ingredients
              <div className="mb-4">
                <MultiSelect
                  isCreatable
                  onCreateOption={(e) => {
                    console.log(mutate(e));
                    return "";
                  }}
                  value={selectedIngredients}
                  labelledBy="Select"
                  onChange={setselectedIngredients}
                  options={
                    ingredients?.map((ingredient) => {
                      return { label: ingredient.name, value: ingredient._id };
                    }) || []
                  }
                />
              </div>
            </div>
            <hr className="mb-1" />
            Instructions
            <div className="mb-6">
              <input
                placeholder="Breakdown your recipe, step by step"
                name="instructions"
                onChange={handleRecipeInfo}
                type="text"
                id="instructions"
                className="w-full h-[150px] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-start gap-3">
              <button
                type="submit"
                className="w-[75px] text-xs py-2 text-amber-400 bg-transparent border border-amber-400 rounded-full hover:bg-amber-500 transition-colors "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[150px] text-xs py-2 text-black bg-amber-400 rounded-full hover:bg-amber-500 transition-colors "
              >
                Submit Recipe
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
