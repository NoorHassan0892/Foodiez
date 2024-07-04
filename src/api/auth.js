import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/user/login", userInfo);
    if (data.token) {
      storeToken(data.token);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const { data } = await instance.get("/user/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const updateProfile = async (userInfo) => {
  try {
    const { data } = await instance.post("user/:id", userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getuser = async (userId) => {
  try {
    const { data } = await instance.get(`user/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMyProfile = async () => {
  const { data } = await instance.get("user/me");
  return data;
};

const register = async (userInfo) => {
  try {
    // const formData = new FormData();
    // for (const key in userInfo) formData.append(key, userInfo[key]);
    console.log(userInfo);
    const { data } = await instance.post("/register", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const allRecipies = async () => {
  const { data } = await instance.get("/recipies/allRecipies");
  console.log(data);
  return data;
};

const fetchRecipe = async (recipeId) => {
  const { data } = await instance.get(`recipies/${recipeId}`);
  return data;
};

export {
  login,
  getMyProfile,
  getAllUsers,
  register,
  updateProfile,
  allRecipies,
  getuser,
  fetchRecipe,
};
