import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  //yseer a76 navigate to a certain page instead of to a page? bc i want to change to button

  return (
    <div class="bg-black text-white flex ">
      {user ? (
        <nav>
          <div class="flex space-x-4">
            <NavLink
              className="border bg-amber-300 hover:bg-amber-600 text-black "
              to="/recipes/create"
            >
              {" "}
              Create Recipe{" "}
            </NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </div>
          <div class="flex space-x-4">
            <NavLink to="/recipes">RECIPES</NavLink>
            <NavLink to="/AllUsers">CHEFS</NavLink>
          </div>
          <div class="flex space-x-7">
            <NavLink to="/italian">ITALIAN</NavLink>
            <NavLink to="/american">AMERICAN</NavLink>
            <NavLink to="asian">ASIAN</NavLink>
            <NavLink to="indian">INDIAN</NavLink>
            <NavLink to="mexican">MEXICAN</NavLink>
            <NavLink to="african">AFRICAN</NavLink>
            <NavLink to="middle">MIDDLE EASTERN</NavLink>
            <NavLink to="miditer">MIDITERRANEAN</NavLink>
          </div>
        </nav>
      ) : (
        <nav>
          <div class="flex space-x-4">
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
          <div class="flex space-x-4">
            <NavLink to="/recipes">RECIPES</NavLink>
            <NavLink to="/AllUsers">CHEFS</NavLink>
          </div>
          <div class="flex space-x-7">
            <NavLink to="/italian">ITALIAN</NavLink>
            <NavLink to="/american">AMERICAN</NavLink>
            <NavLink to="asian">ASIAN</NavLink>
            <NavLink to="indian">INDIAN</NavLink>
            <NavLink to="mexican">MEXICAN</NavLink>
            <NavLink to="african">AFRICAN</NavLink>
            <NavLink to="middle">MIDDLE EASTERN</NavLink>
            <NavLink to="miditer">MIDITERRANEAN</NavLink>
          </div>
        </nav>
      )}
    </div>
  );
};
export default Navbar;
