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
import Recipies from "./pages/Recipies";
import AllRecipes from "./pages/AllRecipes";
import MyProfile from "./pages/MyProfile";
import { getuser, updateProfile } from "./api/auth";
import UpdateProfile from "./pages/UpdateProfile";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import CategoryHeader from "./components/CategoryHeader";
import Searchbar from "./components/Searchbar";
import AddRecipe from "./pages/AddRecipe";

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
          <Route path="/userProfile" Component={getuser} />
          <Route path="/updateprofile" Component={UpdateProfile} />
          <Route path="/allchefs" Component={AllUsers}></Route>
          {user && <Route path="/profile" Component={MyProfile} />}
          <Route path="/home" Component={Home} />
          <Route path="/recipes" Component={AllRecipes} />
          <Route path="/recipes/create" Component={AddRecipe} />
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
