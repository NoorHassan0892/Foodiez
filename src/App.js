import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { login } from "./api/auth";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setUser(true);
  }, []);

  return <Login />;
}

export default App;
