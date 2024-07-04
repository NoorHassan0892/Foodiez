import instance from ".";

const addrecipe = async (image, ingredients, recipeInfo) => {
  const formData = new FormData();

  formData.append("image", image);
  for (let key in recipeInfo) {
    formData.append(key, recipeInfo[key]);
  }

  ingredients.forEach((indegredient) =>
    formData.append("ingredients", indegredient)
  );

  const { data } = await instance.post("/recipies", formData);

  return data;
};

const getAllRecipes = async () => {
  const { data } = await instance.get("/recipies");
  return data;
};

export { addrecipe, getAllRecipes };
