import React, { useState } from "react";
import "./App.css";
import { MainContainer } from "./styles/StyledComponents";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("sign-up");
  return (
    <MainContainer>
      {currentPage === "login" && (
        <Login setCurrentPage={setCurrentPage} setUser={setUser} />
      )}
      {currentPage === "sign-up" && (
        <SignUp setCurrentPage={setCurrentPage} setUser={setUser} />
      )}
    </MainContainer>
  );
}

export default App;
