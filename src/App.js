import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Recipies from "./pages/Recipies";
import AddRecipe from "./pages/AddRecipe";

import AllRecipes from "./pages/AllRecipes";
import MyProfile from "./pages/MyProfile";
import { getuser, updateProfile } from "./api/auth";
import UpdateProfile from "./pages/UpdateProfile";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    }
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/recipies" Component={Recipies} />
          {!user && (
            <>
              <Route path="/register" Component={Register} />
              <Route path="/login" Component={Login} />
            </>
          )}
          <Route path="/" Component={Intro} />
          <Route path="/home" Component={Home} />
          <Route path="/recipes/create" Component={AddRecipe} />
          <Route path="/recipes" Component={AllRecipes} />
          <Route path="/profile" Component={getuser} />
          <Route path="/updateprofile" Component={UpdateProfile}></Route>
          <Route path="/allchefs" Component={AllUsers}></Route>
          <Route path="/profile" Component={MyProfile} />
        </Routes>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
