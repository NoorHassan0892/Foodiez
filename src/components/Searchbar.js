import React from "react";
import theImage from "../assets/search bar pic.svg";
const Searchbar = () => {
  return (
    <div className="bg-slate-600 flex justify-center items-center h-[400px] relative">
      <img
        src={theImage}
        className=" absolute top-0 left-0 bottom-0 right-0 object-cover z-0 h-full w-full "
      />
      <div className="relative w-[30%] flex justify-center items-center">
        <svg
          className="absolute right-[15px]"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.7499 43.7504L34.702 34.7025M34.702 34.7025C36.2497 33.1548 37.4774 31.3175 38.315 29.2953C39.1526 27.2732 39.5837 25.1058 39.5837 22.9171C39.5837 20.7283 39.1526 18.561 38.315 16.5389C37.4774 14.5167 36.2497 12.6794 34.702 11.1317C33.1543 9.584 31.317 8.35631 29.2948 7.51871C27.2727 6.68111 25.1054 6.25 22.9166 6.25C20.7279 6.25 18.5605 6.68111 16.5384 7.51871C14.5162 8.35631 12.6789 9.584 11.1312 11.1317C8.0055 14.2574 6.24951 18.4967 6.24951 22.9171C6.24951 27.3375 8.0055 31.5768 11.1312 34.7025C14.2569 37.8282 18.4962 39.5842 22.9166 39.5842C27.337 39.5842 31.5763 37.8282 34.702 34.7025Z"
            stroke="white"
            stroke-width="3.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          placeholder="Search for recipes"
          type="text"
          name=""
          id=""
          className="w-full px-4 py-2 border border-zinc-300 bg-transparent z-10 text-white      background: rgba(255, 255, 255, 0.26);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        border: 1px solid rgba(255, 255, 255, 0.53); rounded-full focus:outline-none focus:ring-2 "
          required
        />
      </div>
    </div>
  );
};

export default Searchbar;

//
