import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import CategoryHeader from "./components/CategoryHeader";
import Searchbar from "./components/Searchbar";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import Recipies from "./pages/Recipies";

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    }
  }, []);

  const queryClient = new QueryClient();

  const shouldRenderHeaderAndSearchbar = (pathname) => {
    return ["/home", "/recipes"].includes(pathname);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          {!user && (
            <>
              <Route path="/register" Component={Register} />
              <Route path="/login" Component={Login} />
            </>
          )}
          {user ? <Route path="/profile" Component={Profile} /> : <></>}
          <Route path="/home" Component={Home} />
          <Route path="/recipes" Component={Recipies} />
          <Route path="/recipes/create" Component={AddRecipe} />
          <Route path="/recipe" Component={RecipeDetail} />
        </Routes>

        {shouldRenderHeaderAndSearchbar(location.pathname) && (
          <>
            <CategoryHeader />
            <Searchbar />
          </>
        )}

        <Routes>
          <Route path="/home/*" Component={Footer} />
          <Route path="/recipes/*" Component={Footer} />
        </Routes>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
