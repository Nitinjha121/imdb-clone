import React from "react";
import { Link } from "react-router-dom";

function NotFount() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>404 Not Found </h1>
      <h3>Go To </h3>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default NotFount;
