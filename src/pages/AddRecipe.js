import { React, useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import line2 from "../assets/line2.svg";
import { getAllIngredients } from "../api/ingredients";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [servings, setServings] = useState("");
  const [category, setCategory] = useState("");
  const [cooktime, setCooktime] = useState("");
  const [preptime, setpreptime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInsctructions] = useState("");
  const [user, setUser] = useState({});

  const { data: ingredient } = useQuery({
    queryKey: ["ingredient"],
    queryFn: getAllIngredients,
  });

  const { mutate: submit } = useMutation({
    mutationKey: ["addRecipe"],
    mutationFn: () => {
      AddRecipe(
        image,
        title,
        overview,
        servings,
        category,
        cooktime,
        preptime,
        instructions,
        ingredients,
        user
      );
    },
    onSuccess: () => {
      navigate("/AddedRecipePage");
    },
  });

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setCategory(selectedValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="bg-red-500  h-[100vh] flex flex-col items-center  ">
      <div className="bg-black text-white  h-[10%] w-[100%] flex justify-center items-center font-semibold text-2xl">
        Header
      </div>
      <div className="w-full h-full flex justify-center py-7 bg-white">
        <div className="w-[50%] px-6 py-8 bg-white border shadow-xl ">
          <h2 className=" flex justify-center text-3xl text-black font-semibold mb-6">
            Add a Recipe
          </h2>
          <div className=" w-full py-2 ">
            <img src={line2} className="object-contain" />
          </div>
          <div className="w-full h-[10%] bg-amber-100 flex justify-center items-center border border-dashed rounded-sm">
            <button
              onClick={(e) => {
                setImage(e.target.value);
              }}
              type="submit"
              className="w-[20%] text-xs text-white bg-amber-400 rounded-full hover:bg-amber-500 transition-colors "
            >
              + Add an image
            </button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="pt-2">Recipe Title</div>
            <div className="mb-4">
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Enter your recipe title"
                type="text"
                name="title"
                id="title"
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Overview
            <div className="mb-6">
              <input
                onChange={(e) => {
                  setOverview(e.target.value);
                }}
                placeholder="Describe your recipe"
                name="overview"
                type="text"
                id="overview"
                className="w-full h-[100px] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className=" w-full py-2 ">
              <img src={line2} className="object-contain" />
            </div>
            <div className="flex pt-2 gap-2">
              Servings
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setServings(e.target.value);
                  }}
                  placeholder=""
                  type="number"
                  name="servings"
                  id="servings"
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex pt-2 gap-2">
              Cuisine:
              <div className="mb-4">
                <select value={selectedValue} onChange={handleChange}>
                  <option value="Option 1">ITALIAN</option>
                  <option value="Option 2">AMERICAN</option>
                  <option value="Option 3">ASIAN</option>
                  <option value="Option 4">INDIAN</option>
                  <option value="Option 5">MEXICAN</option>
                  <option value="Option 6">AFRINCAN</option>
                  <option value="Option 7">MIDDLE EASTERN</option>
                  <option value="Option 8">MIDITERRANEAN</option>
                </select>
              </div>
            </div>
            <div className="flex pt-2 gap-2">
              Cook Time
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setCooktime(e.target.value);
                  }}
                  placeholder=""
                  type="text"
                  name="cookTime"
                  id="cookTime"
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex pt-2 gap-2">
              Prep Time
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setpreptime(e.target.value);
                  }}
                  placeholder=""
                  type="text"
                  name="prepTime"
                  id="prepTime"
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className=" w-full py-2 ">
              <img src={line2} className="object-contain" />
            </div>
            <div className=" flex flex-col pt-2 gap-2">
              Ingredients
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setIngredients(e.target.value);
                  }}
                  placeholder=""
                  type="text"
                  name="prepTime"
                  id="prepTime"
                  className="w-[80%] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className=" w-full py-2 ">
              <img src={line2} className="object-contain" />
            </div>
            Instructions
            <div className="mb-6">
              <input
                onChange={(e) => {
                  setInsctructions(e.target.value);
                }}
                placeholder="Breakdown your recipe, step by step"
                name="instructions"
                type="text"
                id="instructions"
                className="w-full h-[150px] px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full bg-transparent px-4 py-2 flex justify-center"></div>
            <div className="flex justify-start gap-3">
              <button
                type="submit"
                className="w-[10%] text-xs text-amber-400 bg-transparent border border-amber-400 rounded-full hover:bg-amber-500 transition-colors "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[18%] text-xs text-black bg-amber-400 rounded-full hover:bg-amber-500 transition-colors "
              >
                Submit Recipe
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-1"></div>
        </div>
      </div>
      <div className="bg-black text-white  h-[10%] w-[100%] flex justify-center items-center font-semibold text-2xl">
        Footer
      </div>
    </div>
  );
};

export default AddRecipe;
