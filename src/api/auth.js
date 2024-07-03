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
const getuser = async () => {
  try {
    const { data } = await instance.get("user/:id");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getMyProfile = async () => {
  try {
    const { data } = await instance.get("user/profile");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { login, getAllUsers, updateProfile, getuser, getMyProfile };
