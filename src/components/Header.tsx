import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function Header(): ReactElement {
    return (
        <header>
            <div className="header-nav-title">
                <NavLink to="/">My Artists</NavLink>
            </div>
            <div className="header-nav-links">
                <NavLink to="edit">Edit</NavLink>
                <NavLink to="mine">Mine</NavLink>
                <NavLink to="find">Find</NavLink>
                <NavLink to="login">Login</NavLink>
            </div>
        </header>
    );
}
