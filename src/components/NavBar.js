import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navItems = links.map((link, index) => (
    <li key={index}>
      <a href={`#${link}`}>{link}</a>
    </li>
  ));

  return (
    <nav>
      <ul>
        {navItems}
      </ul>
    </nav>
  );
}

export default NavBar;

