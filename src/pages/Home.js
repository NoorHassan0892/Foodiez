import React from "react";
import logo from "../assets/white logo.svg";
import bg from "../assets/5.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        backgroundImage: `url("https://t3.ftcdn.net/jpg/03/08/62/46/240_F_308624602_fdfR9rDbMCqe5xF6ODEKrjv1kcOFe8yA.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw ",
      }}
    >
      <div class=" flex flex-nowrap">
        <div>
          <img src={logo} alt="logo" class="w-80 h-80 rounded-full " />
        </div>
        <div class=" absolute right-0">
          <button class="bg-amber-400 px-10 h-10 font-semibold rounded-full">
            Login
          </button>
          <button class="bg-amber-400 px-10 h-10 font-semibold rounded-full">
            Register
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1>FIND YOUR NEXT CULINAEY EXPERINCE</h1>
      </div>
      <div className="flex items-center justify-center">
        <label htmlFor="Search for a recipe"></label>
      </div>
      <div className="flex items-center justify-center">
        <h1>
          INLEASH YOUR INNER CHEF, FUAL YOUR BODY & SOUL, EXPLORE THOUSENDS OF
          DELICIOUS RECIPES FROM
        </h1>
        <footer class="absolute inset-x-0 bottom-0 h-45  bg-gray-200">
          <div className=" mt-6 text-center text-black leading-relaxed flex ">
            <div className=" w-8/12">
              <h1 class="text-xl font-semibold  ">About Us</h1>
              Our mission is to make everday cooking fun, because we bwelive
              that cookin is key to a happier and healthier life for people,
              communities and the planet. We empower homecookes all over the
              world to help each other by sharing recipes and cooking tips.
            </div>
            <div className="w-4/12">LEARN MORE</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
