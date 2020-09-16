import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/leaderboard" activeClassName="active">
        Leaderboard
      </NavLink>
      <NavLink to="/add" activeClassName="active">
        Add Poll
      </NavLink>
    </nav>
  );
}
