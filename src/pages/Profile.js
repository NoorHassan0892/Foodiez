import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getMyProfile, getuser } from "../api/auth";
import UserContext from "../context/UserContext"; // Adjust the import based on your setup
import Recipies from "./Recipies";
import RecipeItem from "../components/RecipeItemAsma";
import CategoryHeader from "../components/CategoryHeader";
import Footer from "../components/Footer";

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
    <div>
      {" "}
      <CategoryHeader />
      <div className="pt-9 flex flex-col h-screen px-[300px] ">
        <div className=" w-full h-[20%] flex ">
          <div className=" text-3xl font-Cormorant">{userInfo?.username}</div>
        </div>
        <div className="flex flex-wrap w-full justify-center gap-2 m-2 h-[80%]">
          {recipesList}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
