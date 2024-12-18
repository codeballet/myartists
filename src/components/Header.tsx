import { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

export function Header(): ReactElement {
    const {
        loggedIn,
        setArtist,
        setId,
        setLoggedIn,
        setPassword,
        setUsername,
    } = useContext(UserContext);

    const handleLogOut = () => {
        if (loggedIn) {
            setArtist(false);
            setId("");
            setLoggedIn(false);
            setPassword("");
            setUsername("");
        }
    };

    return (
        <header>
            <div className="header-nav-title">
                <NavLink to="/">My Artists</NavLink>
            </div>
            <div className="header-nav-links">
                {loggedIn && <NavLink to="edit">Edit</NavLink>}
                {loggedIn && <NavLink to="mine">Mine</NavLink>}
                <NavLink to="find">Find</NavLink>
                <NavLink to="login" onClick={handleLogOut}>
                    {loggedIn ? "Logout" : "Login"}
                </NavLink>
            </div>
        </header>
    );
}
