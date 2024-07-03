import instance from ".";

const getAllCategories = async () => {
  const { data } = await instance.get("/categories");
  return data;
};

export { getAllCategories };
