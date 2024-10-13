import { createContext, ReactElement, ReactNode, useState } from "react";
import { IArtist, IImage, IWork, IWorkArtist } from "../interfaces";
import { useRouteLoaderData } from "react-router-dom";
import { TData } from "../types";

export interface IUserContext {
    artist: boolean;
    artists: IArtist[];
    favoriteArtists: string[];
    favoriteWorks: string[];
    id: string;
    images: IImage[];
    loggedIn: boolean;
    password: string;
    username: string;
    works: IWork[];
    worksArtists: IWorkArtist[];
    setArtist: (artist: boolean) => void;
    setArtists: (artists: IArtist[]) => void;
    setFavoriteArtists: (favoriteArtists: string[]) => void;
    setFavoriteWorks: (favoriteWorks: string[]) => void;
    setId: (id: string) => void;
    setImages: (images: IImage[]) => void;
    setLoggedIn: (loggedIn: boolean) => void;
    setPassword: (password: string) => void;
    setUsername: (username: string) => void;
    setWorks: (works: IWork[]) => void;
    setWorksArtists: (worksArtists: IWorkArtist[]) => void;
}

export interface IUserContextProviderChildren {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserContextProvider({
    children,
}: IUserContextProviderChildren): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Set states
    const [artist, setArtist] = useState<boolean>(false);
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [favoriteArtists, setFavoriteArtists] = useState<string[]>([]);
    const [favoriteWorks, setFavoriteWorks] = useState<string[]>([]);
    const [id, setId] = useState<string>("");
    const [images, setImages] = useState<IImage[]>(data[1]);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [works, setWorks] = useState<IWork[]>(data[2]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[3]);

    const values = {
        artist,
        artists,
        favoriteArtists,
        favoriteWorks,
        id,
        images,
        loggedIn,
        password,
        username,
        works,
        worksArtists,
        setArtist,
        setArtists,
        setFavoriteArtists,
        setFavoriteWorks,
        setId,
        setImages,
        setLoggedIn,
        setPassword,
        setUsername,
        setWorks,
        setWorksArtists,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
}
