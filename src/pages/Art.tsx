import React from "react";
import { Link } from "react-router-dom";

const Art = () => {
  return (
    <div>
      <div>
        <div>
          this is art
          <Link to={"/"}> home</Link>
          <Link to={"/aboutme"}> about me </Link>
          <Link to={"/art"}> art </Link>
          <Link to={"/uxui"}> uxui </Link>
          <Link to={"/webdev"}> webdev </Link>
        </div>
      </div>
    </div>
  );
};

export default Art;
