import React from "react";
import logo from "../assets/white logo.svg";
import bg from "../assets/5.jpg";
import apple from "../assets/Apple store.svg";
import google from "../assets/Google play.svg";
import insta from "../assets/Instagram colored.svg";
import facebook from "../assets/Facebook colored.svg";
import x from "../assets/Twitter.svg";

const Home = () => {
  return (
    <div className="">
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
            <button class="bg-amber-400 px-10 m-6 h-10 font-semibold rounded-full">
              Login
            </button>
            <button class="bg-amber-400 px-10 m-6 h-10 font-semibold rounded-full ">
              Register
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-3xl text-center text-white">
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

          <footer class="absolute bottom-0 inset-x-0  h-30  bg-gray-200">
            <div className=" mt-6 text-center text-black leading-relaxed flex ">
              <div className=" w-8/12">
                <h1 class="text-xl font-semibold  ">About Us</h1>
                <div className="font-semibold">
                  {" "}
                  Our mission is to make everday cooking fun, because we bwelive
                  that cookin is key to a happier and healthier life for people,
                  communities and the planet. We empower homecookes all over the
                  world to help each other by sharing recipes and cooking tips.
                </div>
                <div className="flex justify-center">
                  <img className="w-40 mx-8 h-20" src={apple}></img>{" "}
                  <img className="w-40 mx-8 h-20" src={google}></img>
                </div>
              </div>
              <div className=" w-2/12">
                <div className="colums">
                  <p className="font-semibold">LEARN MORE</p>
                  <p className="underline"> Community </p>
                  <p className="underline"> Feedback </p>
                  <p className="underline"> Blog </p>
                  <p className="underline"> Terms of Service </p>
                  <p className="underline"> Privecy Policy </p>
                </div>
                <div className="grid gap-4 grid-cols-3 ">
                  <img className="row w-10 h-10" src={insta}></img>
                  <img className="row w-10 h-10" src={facebook}></img>
                  <img className="row w-10 h-10" src={x}></img>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
