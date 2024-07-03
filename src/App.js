import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddRecipe from "./pages/AddRecipe";
import AddedRecipe from "./pages/AddedRecipe";
import AllRecipes from "./pages/AllRecipes";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setUser(true);
  }, []);

  const queryClient = new QueryClient();

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
          <Route path="/recipes/create" Component={AddRecipe} />
          <Route path="/recipes" Component={AllRecipes} />
        </Routes>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
