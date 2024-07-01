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
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token);
  } catch (error) {
    console.log(error);
  }
};

export { login, register };
