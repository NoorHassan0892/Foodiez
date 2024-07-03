import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/recipes/create">Add recipe</Link>
    </div>
  );
};

export default Home;
