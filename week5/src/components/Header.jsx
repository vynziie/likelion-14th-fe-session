import React from "react";

function Header({ title }) {
  return (
    <header style={{ backgroundColor: "#f8f9fa", padding: "10px", marginBottom: "20px", borderRadius: "10px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>{title}</h1>
    </header>
  );
}

export default Header;