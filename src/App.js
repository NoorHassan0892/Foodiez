import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setUser(true);
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/login" Component={Login} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
