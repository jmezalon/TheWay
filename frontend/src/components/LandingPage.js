import React from "react";
import { Suggestions } from "./Suggestions";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="search">
        <p>Find local Church near you...</p>
        <input
          id="search-bar"
          name="zip_code"
          type="text"
          placeholder="enter zip-code"
        />
      </div>
      <p>suggestions</p>
      <Suggestions />
    </div>
  );
};
