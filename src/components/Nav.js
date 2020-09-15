import * as React from "react"
import { NavLink } from "react-router-dom"

export default function Nav () {
    return (
        <nav>
            <NavLink to="/" exact>
                Home
            </NavLink>
            <NavLink to="/leaderboard">
            Leaderboard
            </NavLink>
            <NavLink to="/add">
            Add Poll
            </NavLink>
        </nav>
    )
}