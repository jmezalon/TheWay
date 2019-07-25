import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>Create an account</p>
    </div>
  );
};
