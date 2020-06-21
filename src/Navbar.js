import React from "react";
import { Link } from "@reach/router";

const Navbar = () => (
  <header>
    <Link to="/">Adopt Me!</Link>
    <span role="img" aria-label="Logo">
      🐈
    </span>
  </header>
);

export default Navbar;
