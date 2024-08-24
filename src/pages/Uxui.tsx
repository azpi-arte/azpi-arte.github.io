import React from "react";
import { Link } from "react-router-dom";

const Uxui = () => {
  return (
    <div>
      <div>
        this is uxui
        <Link to={"/"}> home</Link>
        <Link to={"/aboutme"}> about me </Link>
        <Link to={"/art"}> art </Link>
        <Link to={"/uxui"}> uxui </Link>
        <Link to={"/webdev"}> webdev </Link>
      </div>
    </div>
  );
};

export default Uxui;
