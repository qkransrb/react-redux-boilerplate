import React from "react";
import { Link } from "react-router-dom";
import Content from "../wrapper/Content";

const Header = () => {
  return (
    <header className="fixed w-full h-20">
      <Content>
        <nav className="w-full h-full flex justify-end items-center bg-white">
          <ul className="flex justify-start items-center gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </Content>
    </header>
  );
};

export default Header;
