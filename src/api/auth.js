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

const register = async (userInfo) => {
  try {
    const { data } = await instance.post("/user/register", userInfo);
    if (data.token) {
      storeToken(data.token);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { login, register };
