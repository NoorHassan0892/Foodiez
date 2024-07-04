import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";

const AllUsers = () => {
  const { data: users } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsers,
  });

  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class=" fixed top-0 left-0 right-0 text-white">
          <h2>All Chefs :</h2>
        </div>

        {users?.map((user) => (
          <div key={user._id} className="flex justify-around border-b-2">
            <div>
              <img
                src={`http://localhost:8000/${user.image}`}
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
            </div>

            <div className="text-center">
              <h3>Chef Name: {user.username}</h3>

              <h3>Website: {user.website}</h3>

              <h3>About the Chef: {user.bio}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllUsers;
