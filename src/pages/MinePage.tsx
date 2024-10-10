import { ReactElement, useContext, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { TData } from "../types";
import { IArtist, IImageCredits, IWork, IWorkArtist } from "../interfaces";
import { UserContext } from "../context/UserContextProvider";
import { workArtists } from "../utils";
import { Card } from "../components";

export function MinePage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Acquire context
    const { favoriteWorks, setFavoriteWorks } = useContext(UserContext);

    // Define states
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [imageCredits, setImageCredits] = useState<IImageCredits[]>(data[1]);
    const [works, setWorks] = useState<IWork[]>(data[2]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[3]);

    const myWorks = (): IWork[] => {
        return works.filter((work) => favoriteWorks.includes(work.id));
    };

    return (
        <section className="mine-page">
            <h2>
                {favoriteWorks.length > 0
                    ? "My Favorite Works"
                    : "No favorites yet"}
            </h2>
            <div className="cards-container">
                {myWorks().map((work) => (
                    <Card
                        key={work.id}
                        artists={workArtists(artists, work.id, worksArtists)}
                        imageCredits={imageCredits}
                        work={work}
                    />
                ))}
            </div>
        </section>
    );
}
