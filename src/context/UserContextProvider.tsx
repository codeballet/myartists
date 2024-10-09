import { createContext, ReactElement, ReactNode, useState } from "react";

export interface IUserContext {
    artist: boolean;
    setArtist: (artist: boolean) => void;
    favoriteArtists: string[];
    setFavoriteArtists: (favoriteArtists: string[]) => void;
    favoriteWorks: string[];
    setFavoriteWorks: (favoriteWorks: string[]) => void;
    id: string;
    setId: (id: string) => void;
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    password: string;
    setPassword: (password: string) => void;
    username: string;
    setUsername: (username: string) => void;
}

export interface IUserContextProviderChildren {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserContextProvider({
    children,
}: IUserContextProviderChildren): ReactElement {
    const [artist, setArtist] = useState<boolean>(true);
    const [id, setId] = useState<string>("");
    const [favoriteArtists, setFavoriteArtists] = useState<string[]>([]);
    const [favoriteWorks, setFavoriteWorks] = useState<string[]>([]);
    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    const values = {
        artist,
        setArtist,
        id,
        setId,
        favoriteArtists,
        setFavoriteArtists,
        favoriteWorks,
        setFavoriteWorks,
        loggedIn,
        setLoggedIn,
        password,
        setPassword,
        username,
        setUsername,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
}
