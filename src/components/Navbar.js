import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
};

return (
  <nav>
    <NavLink to="/login">Login </NavLink>
    <NavLink to="/register">Register</NavLink>

    <NavLink to="/recipes">RECIPES</NavLink>
    <NavLink to="/guest">CONTINUE AS A GUEST</NavLink>
    <div>
      <NavLink to="/recipes">RECIPES</NavLink>
      <NavLink to="/chefs">CHEFS</NavLink>
    </div>
    <NavLink to="/italian">ITALIAN</NavLink>
    <NavLink to="/american">AMERICAN</NavLink>
    <NavLink to="asian">ASIAN</NavLink>
    <NavLink to="indian">INDIAN</NavLink>
    <NavLink to="mexican">MEXICAN</NavLink>
    <NavLink to="african">AFRICAN</NavLink>
    <NavLink to="middle">MIDDLE EASTERN</NavLink>
    <NavLink to="miditer">MIDITERRANEAN</NavLink>
  </nav>
);
export default Navbar;
