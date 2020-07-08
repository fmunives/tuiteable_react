import React, { useState } from "react";
import "./App.css";
import { MainContainer } from "./styles/StyledComponents";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <MainContainer>
      <Login setUser={setUser} />
      {/* <RegisterUser /> */}
      {/* <ProfileUser /> */}
    </MainContainer>
  );
}

export default App;
