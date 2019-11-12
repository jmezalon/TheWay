import React from "react";

export const List = ({ allChurches }) => {
  let suggestedChurch = allChurches.map(church => {
    return (
      <>
        <Link key={church.id} to="/local-church/:id">
          <h3>{church.name}</h3>
        </Link>
        <p>{church.pastor}</p>
        <div id="address">
          <p>{church.location}</p>
          <p>{church.zip_code}</p>
          <p>{church.website}</p>
        </div>
      </>
    );
  });
  return <div className="suggestions">{suggestedChurch}</div>;
};
