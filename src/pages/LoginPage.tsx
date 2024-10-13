import { FormEvent, ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Navigate } from "react-router-dom";
import { IArtist } from "../interfaces";

export function LoginPage(): ReactElement {
    // Get context
    const {
        artists,
        loggedIn,
        password,
        username,
        setArtist,
        setArtists,
        setId,
        setLoggedIn,
        setPassword,
        setUsername,
    } = useContext(UserContext);

    const handleLoginForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create / login user
        username ? setUsername(username) : setUsername("anonymous");
        password ? setPassword(password) : setPassword("password");
        setLoggedIn(true);
        setArtist(true);

        // Create new id for user
        const allIds: number[] = artists.map((artist) => parseInt(artist.id));
        const newId: string = `${Math.max(...allIds) + 1}`;
        setId(newId);

        // Store user as artist in database
        const newArtist: IArtist = {
            family_name: "Artist",
            first_name: "Anonymous",
            id: newId,
            images: [],
        };
        const newArtists: IArtist[] = [newArtist, ...artists];
        setArtists(newArtists);
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
