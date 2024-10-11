import { FormEvent, ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Navigate } from "react-router-dom";

export function LoginPage(): ReactElement {
    const {
        setArtist,
        loggedIn,
        setLoggedIn,
        password,
        setPassword,
        username,
        setUsername,
    } = useContext(UserContext);

    const handleLoginForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoggedIn(true);
        setArtist(true);
    };

    return (
        <section className="login-page">
            {loggedIn ? (
                <Navigate to="/" />
            ) : (
                <form id="loginForm" onSubmit={handleLoginForm}>
                    <div id="loginFormUsername">
                        <label
                            htmlFor="loginFormUsernameInput"
                            id="loginFormUsernameLabel"
                        >
                            Enter Username
                        </label>
                        <input
                            autoFocus
                            id="loginFormUsernameInput"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username..."
                            type="text"
                            value={username}
                        />
                    </div>
                    <div id="loginFormPassword">
                        <label
                            htmlFor="loginFormPasswordInput"
                            id="loginFormPasswordLabel"
                        >
                            Enter Password
                        </label>
                        <input
                            id="loginFormPasswordInput"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password..."
                            type="password"
                            value={password}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
}
