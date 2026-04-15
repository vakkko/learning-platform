import React from "react";

import { Link } from "react-router";

import type { NavigationColumnProps } from "./NavigationColumn.types";

import "./NavigationColumn.styles.scss";

const NavigationColumn: React.FC<NavigationColumnProps> = ({
  links,
  heading,
  handleOpen,
}) => {
  return (
    <nav className="footer-navigation-column">
      <h4>{heading}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.src && <img src={link.src} alt="contact-icon" />}
            {handleOpen && <button onClick={handleOpen}>{link.linkTo}</button>}
            {link.to && <Link to={link.to ? link.to : "/"}>{link.linkTo}</Link>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationColumn;
