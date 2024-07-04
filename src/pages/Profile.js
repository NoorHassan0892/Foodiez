<<<<<<< HEAD
import React from "react";

const Profile = () => {
  return (
    <div className="bg-blue-200 flex flex-col h-screen px-[300px] ">
      <div className="bg-red-300 w-full h-[20%] flex flex-col">
        <div className="bg-red-900 w-[20%] h-full"></div>
        <div className="bg-green-900"></div>
      </div>
      <div className="bg-blue-300 w-full h-[80%]"></div>
=======
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getMyProfile, getuser } from "../api/auth";
import UserContext from "../context/UserContext"; // Adjust the import based on your setup
import Recipies from "./Recipies";
import RecipeItem from "../components/RecipeItemAsma";

const Profile = () => {
  const [user] = useContext(UserContext); // Assuming user object contains userId

  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });

  console.log("me", userInfo);

  const recipesList = userInfo?.recipes?.map((recipe) => (
    <RecipeItem key={recipe.id} recipe={recipe} />
  ));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="bg-blue-200 flex flex-col h-screen px-[300px] ">
      <div className="bg-red-300 w-full h-[20%] flex ">
        <div className="bg-green-900">{userInfo?.username}</div>
      </div>
      <div className="bg-blue-300 w-full h-[80%]">{recipesList}</div>
>>>>>>> origin/main
    </div>
  );
};

export default Profile;
