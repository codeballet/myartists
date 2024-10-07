import { ReactElement, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { IArtist, IUser, IWork } from "../interfaces";

type TData = [IArtist[], IUser, IWork[]];

export function HomePage(): ReactElement {
    const data = useRouteLoaderData("app") as TData;

    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [user, setUser] = useState<IUser>(data[1]);
    const [works, setWorks] = useState<IWork[]>(data[2]);

    console.log(artists);
    console.log(user);
    console.log(works);

    return (
        <section className="home-page">
            <h2>HomePage</h2>
        </section>
    );
}
