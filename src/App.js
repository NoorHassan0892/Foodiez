import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import React, { useEffect, useState } from "react";
import { getuser, login } from "./api/auth";
import Home from "./pages/Home";
import UpdateProfile from "./pages/UpdateProfile";
import Navbar from "./components/Navbar";
import AllUsers from "./pages/AllUsers";
import MyProfile from "./pages/MyProfile";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setUser(true);
  }, []);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Navbar />
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/UpdateProfile" Component={UpdateProfile} />
          <Route path="/AllUsers" Component={AllUsers} />
          <Route path="/profile" Component={MyProfile} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
