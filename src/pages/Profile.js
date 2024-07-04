import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getMyProfile, getuser } from "../api/auth";
import UserContext from "../context/UserContext"; // Adjust the import based on your setup
import Recipies from "./Recipies";
import RecipeItem from "../components/RecipeItemAsma";

const Profile = () => {
  const [user] = useContext(UserContext); // Assuming user object contains userId
  const userId = user?.id; // Adjust based on your user object structure

  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getMyProfile(),
  });

  const recipesList = userId.recipes?.map((recipe) => (
    <RecipeItem key={recipe.id} recipe={recipe} />
  ));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="bg-blue-200 flex flex-col h-screen px-[300px] ">
      <div className="bg-red-300 w-full h-[20%] flex ">
        <div className="bg-red-900 w-[20%] h-full ">
          {userInfo?.image && <img src={userInfo.image} alt="Profile" />}
        </div>
        <div className="bg-green-900">{userInfo?.username}</div>
      </div>
      <div className="bg-blue-300 w-full h-[80%]">{recipesList}</div>
    </div>
  );
};

export default Profile;
