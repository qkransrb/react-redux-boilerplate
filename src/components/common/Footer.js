import React from "react";
import Content from "../wrapper/Content";

const Footer = () => {
  return (
    <footer className="w-full h-12 -translate-y-[100%]">
      <Content className="flex justify-center items-center">
        <p className="text-sm">Copyright &copy; 2022</p>
      </Content>
    </footer>
  );
};

export default Footer;
