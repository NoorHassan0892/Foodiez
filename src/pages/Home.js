import React from "react";
import logo from "../assets/white logo.svg";
import bg from "../assets/5.jpg";
import apple from "../assets/Apple store.svg";
import google from "../assets/Google play.svg";
import insta from "../assets/Instagram colored.svg";
import facebook from "../assets/Facebook colored.svg";
import x from "../assets/Twitter.svg";
import Searchbar from "../components/Searchbar";
import CategoryHeader from "../components/CategoryHeader";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CategoryHeader />
      <Searchbar />;
    </div>
  );
};

export default Home;
