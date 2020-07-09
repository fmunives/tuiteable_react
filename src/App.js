import React, { useState } from "react";
import "./App.css";
import { MainContainer } from "./styles/StyledComponents";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [user, setUser] = useState(null);
  return (
    <MainContainer>
      <Login setUser={setUser} />
      <SignUp setUser={setUser} />
    </MainContainer>
  );
}

export default App;
