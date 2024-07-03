import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMyProfile } from "../api/auth";

const MyProfile = () => {
  const { data: user } = useQuery({
    queryKey: ["getMyProfile"],
    queryFn: getMyProfile,
  });
  return (
    <div>
      {user?.map((user) => (
        <div key={user._id}>
          <img
            src={user.image}
            alt="User"
            className="w-24 h-24 rounded-full mb-4"
          />
          <div className="text-center">
            <h3>Chef Name: {user.firstname}</h3>
          </div>
          <div>
            <h3>Website: {user.website}</h3>
          </div>
          <div>
            <h3>About the Chef: {user.bio}</h3>
          </div>
          <div>His recipes: {user.Recipe}</div>
        </div>
      ))}
    </div>
  );
};
export default MyProfile;
