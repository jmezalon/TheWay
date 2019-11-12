import React from "react";
import { Suggestions } from "./Suggestions";

export const LandingPage = ({ allChurches }) => {
  return (
    <div className="landing-page">
      <h1 id="title">Welcome To The Way</h1>
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

      <Suggestions allChurches={allChurches} />
    </div>
  );
};
