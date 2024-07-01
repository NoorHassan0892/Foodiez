const storeToken = (token) => {
  return localStorage.setItem("token", token);
};

export { storeToken };
