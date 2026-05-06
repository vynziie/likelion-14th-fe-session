import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Bio from "./components/Bio";

function App() {
  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "0 auto" }}>
      <Header title="장가윤의 프로필 세션 🦁" />

      <Profile 
        img="https://via.placeholder.com/150" 
        mood="행복해" 
      />

      <Bio text="멋사 14기 프론트엔드 공부중!" />
    </div>
  );
}

export default App;