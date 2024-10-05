import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function Footer(): ReactElement {
    return (
        <footer>
            <p>&copy; Johan Stjernholm, 2024</p>
            <NavLink to="about">About</NavLink>
        </footer>
    );
}
