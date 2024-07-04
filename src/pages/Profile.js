import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getuser } from "../api/auth";

const Profile = () => {
  const { data: userInfo } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getuser(),
  });

  return (
    <div className="bg-blue-200 flex flex-col h-screen px-[300px] ">
      <div className="bg-red-300 w-full h-[20%] flex ">
        <div className="bg-red-900 w-[20%] h-full ">
          {/* <img src={userInfo.image} /> */}
        </div>
        {/* <div className="bg-green-900">{userInfo.name}</div> */}
      </div>
      <div className="bg-blue-300 w-full h-[80%]"></div>
    </div>
  );
};

export default Profile;
