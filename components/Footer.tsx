import React from "react";
import { Github } from "react-bootstrap-icons";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="navbar">
      <p className="p-2 mx-2 my-auto text-light fs-5">©2021 Carl Griffin.</p>
      <a href="https://github.com/cgriffin35/" target="_blank" rel="noreferrer">
        <Github size="32" className="mx-2" color="#d8c691" />
      </a>
    </div>
  );
};

export default Footer;
