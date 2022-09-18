import React from "react";
import {Link, NavLink} from "react-router-dom";

const activeStyle={
  color:"purple",
}


export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to ="/">
              <img alt="Ring Store" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/rings">Rings</NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
