import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/login">login</Link>
      <Link to="/login">退出</Link>
      <Link to="/login">翻译列表</Link>
    </div>
  );
};

export default Header;
