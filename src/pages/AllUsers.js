import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";

const AllUsers = () => {
  const { data: users } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsers,
  });

  return (
    <div>
      <div>
        <h2>All Chefs</h2>
        <div class="fixed top-0 left-0 right-0 ">
          {users?.map((user) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
