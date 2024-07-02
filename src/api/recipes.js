import instance from ".";

const addrecipe = async (
  image,
  title,
  overview,
  servings,
  category,
  cooktime,
  preptime,
  instructions,
  user
) => {
  const { data } = await instance.post("/recipies", {
    image: image,
    title: title,
    overview: overview,
    servings: servings,
    category: category,
    cooktime: cooktime,
    preptime: preptime,
    instructions: instructions,
    ingredients: ingredients,
    user: user,
  });
  return data;
};

export { addrecipe };
