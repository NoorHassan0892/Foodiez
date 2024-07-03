import instance from ".";
import { storeToken } from "./storage";

const login = async (username, password) => {
  try {
    const { data } = await instance.post("/auth/login", { username, password });
    if (data.token) {
      storeToken(data.token);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
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

export { login, register, allRecipies };
