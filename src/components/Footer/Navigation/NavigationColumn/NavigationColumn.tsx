import React from "react";

import type { NavigationColumnProps } from "./NavigationColumn.types";

import "./NavigationColumn.styles.scss";

const NavigationColumn: React.FC<NavigationColumnProps> = ({
  links,
  heading,
}) => {
  return (
    <nav className="footer-navigation-column">
      <h4>{heading}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.src && <img src={link.src} alt="contact-icon" />}
            <a href="#">{link.LinkTo}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationColumn;
