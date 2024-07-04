import { useQuery } from "@tanstack/react-query";
import React from "react";
import { allRecipies } from "../api/auth";
import RecipieItem from "../components/RecipieItem";
import search from "../assets/search bar pic.svg";

const Recipies = () => {
  const { data: recipies } = useQuery({
    queryKey: ["recipies"],
    queryFn: allRecipies,
  });

  console.log("recipes", recipies);

  const recipiesList = recipies?.map((recipe) => (
    <RecipieItem
      key={recipe._id}
      title={recipe.title}
      image={recipe.image}
      username={recipe?.username?.name}
      id={recipe._id}
    />
  ));

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className=" bg-black text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Coded</div>
        <nav>
          {" "}
          <ul className="flex space-x-4"></ul>{" "}
        </nav>
        <div>
          <button className="mr-4">Login</button>
          <button>Register</button>
        </div>
      </header>
      <div className="">
        <div>
          <img src={search} />
          <div className=" absolute inset-0 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for recipies.."
              className=" p-2 rounded-[20px] w-1/2 bg-slate-700 bg-opacity-80 border-slate-500 border-opacity-80 border-[1px]"
            ></input>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 p-4">
            <h2 className="text-xl font-semibold mb-4"> Filter By:</h2>
            <div className="mb-4">
              <input></input>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center">
        {" "}
        {recipiesList}
      </div>
    </div>
  );
};

export default Recipies;
