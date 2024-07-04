import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Recipies from "./pages/Recipies";
import AddRecipe from "./pages/AddRecipe";

import AllRecipes from "./pages/AllRecipes";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import CategoryHeader from "./components/CategoryHeader";
import Searchbar from "./components/Searchbar";

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
        <CategoryHeader />
        <Searchbar />
        <Routes>
          {!user && (
            <>
              <Route path="/register" Component={Register} />
              <Route path="/login" Component={Login} />
            </>
          )}

          <Route path="/home" Component={Home} />
          <Route path="/recipes" Component={AllRecipes} />
        </Routes>
        <Routes>
          <Route path="/home/*" Component={Footer} />
          <Route path="/recipes/*" Component={Footer} />
        </Routes>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
