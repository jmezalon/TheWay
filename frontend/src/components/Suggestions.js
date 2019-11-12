import React from "react";
// import { List } from "./List";
import { Link } from "react-router-dom";

export const Suggestions = ({ allChurches }) => {
  let suggestedChurch = allChurches.map(church => {
    return (
      <div className="suggestions">
        <Link key={church.id} to={`/local-church/${church.id}`}>
          <h3>{church.name}</h3>
        </Link>
        <p>{church.pastor}</p>
        <div id="address">
          <p>{church.location}</p>
          <p>{church.zip_code}</p>
          <p>{church.website}</p>
        </div>
      </div>
    );
  });
  // <List allChurches={allChurches} />
  // <List allChurches={allChurches} />
  return (
    <div className="suggest-list">
      {suggestedChurch[Math.floor(Math.random() * allChurches.length)]}
      {suggestedChurch[Math.floor(Math.random() * allChurches.length)]}
      {suggestedChurch[Math.floor(Math.random() * allChurches.length)]}
      {suggestedChurch[Math.floor(Math.random() * allChurches.length)]}
    </div>
  );
};
