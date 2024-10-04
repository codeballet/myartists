import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function Header(): ReactElement {
    return (
        <header>
            <div className="header-nav-title">
                <NavLink to="/">My Artists</NavLink>
            </div>
            <div className="header-nav-links">
                <NavLink to="/">Edit</NavLink>
                <NavLink to="/">Mine</NavLink>
                <NavLink to="/">Find</NavLink>
                <NavLink to="/">Login</NavLink>
            </div>
        </header>
    );
}
