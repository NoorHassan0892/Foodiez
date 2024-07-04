import React from "react";
import img1 from "../assets/Apple store.svg";
import img2 from "../assets/Google play.svg";
import img3 from "../assets/Instagram colored.svg";
import img4 from "../assets/Facebook colored.svg";
import img5 from "../assets/Pinterest colored.svg";
import img6 from "../assets/Twitter.svg";

const Footer = () => {
  return (
    <div className="w-full h-[250px] font-Poppins bg-[#ECECEC] flex justify-between">
      <div className=" w-[75%]  flex ">
        <div className=" w-full flex pl-48 pr-48 pt-5 pb-5 justify-center flex-col">
          <div className="font-medium text-xl">About Us</div>
          <br></br>
          <div className="font-light">
            Our mission is to make everyday cooking fun, because we believe that
            cooking is key to a happier and healthier life for people,
            communities, and the planet. We empower homecooks all over the world
            to help each other by sharing recipes and cooking tips.
          </div>
          <br></br>
          <div className="flex gap-2 ">
            <img src={img1} className="w-[120px]" />
            <img src={img2} className="w-[120px]" />
          </div>
        </div>
      </div>
      <div className=" w-[25%]">
        <div className=" w-full flex pt-5 pb-5 justify-center flex-col">
          <div className="font-light pb-3 text-lg">LEARN MORE</div>

          <div className="underline">
            Community
            <br></br>
            Feedbabk
            <br></br>
            Terms of Service
            <br></br>
            Privacy Policy
          </div>
          <br></br>
          <div className="flex gap-3">
            <img src={img3} className="h-full w-[10%]" />
            <img src={img4} className="h-full w-[10%]" />
            <img src={img5} className="h-full w-[10%]" />
            <img src={img6} className="h-full w-[10%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
