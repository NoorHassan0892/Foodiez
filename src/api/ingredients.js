import instance from ".";

const getAllIngredients = async () => {
  const { data } = await instance.get("/ingredients");
  return data;
};

const addIngredient = async (name) => {
  const res = await instance.post("/ingredients", { name: name });
  return res.data;
};

export { getAllIngredients, addIngredient };
