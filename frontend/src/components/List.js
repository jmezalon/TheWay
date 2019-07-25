import React from "react";
import { Link } from "react-router-dom";

export const List = () => {
  return (
    <div className="suggestions">
      <Link to="/local-church/:id">
        <h3>Church Title</h3>
      </Link>
      <p>Pastor Name here</p>
      <>
        <p>address here</p>
        <p>zip_code here</p>
        <p>link to website here</p>
      </>
    </div>
  );
};
