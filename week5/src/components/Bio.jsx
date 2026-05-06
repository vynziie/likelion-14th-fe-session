import React from "react";

function Bio({ text }) {
  return (
    <div style={{ marginTop: "15px", fontStyle: "italic", color: "#666", textAlign: "center" }}>
      <p>"{text}"</p>
    </div>
  );
}

export default Bio;