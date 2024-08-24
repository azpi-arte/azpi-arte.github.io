import React from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div>
      this is about me
      <Link to={"/"}> home</Link>
      <Link to={"/aboutme"}> about me </Link>
      <Link to={"/art"}> art </Link>
      <Link to={"/uxui"}> uxui </Link>
      <Link to={"/webdev"}> webdev </Link>
    </div>
  );
};

export default Aboutme;
