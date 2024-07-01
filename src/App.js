import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { login } from "./api/auth";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setUser(true);
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[user, setUser]}>
        <div>
          <Routes>
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
          </Routes>
        </div>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
