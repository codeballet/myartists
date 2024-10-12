import { ReactElement, useContext, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { TData } from "../types";
import { IArtist, IImage, IWork, IWorkArtist } from "../interfaces";
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
    const [images, setImages] = useState<IImage[]>(data[1]);
    const [works, setWorks] = useState<IWork[]>(data[2]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[3]);

    const myWorks = (): IWork[] => {
        return works.filter((work) => favoriteWorks.includes(work.id));
    };

    const getImageDetails = (work: IWork): string[] => {
        // Get image url
        const imageUrl: string =
            work.images[Math.floor(Math.random() * work.images.length)];

        // Get image credits
        const imageCredits = images.filter((img) => img.url === imageUrl)[0]
            .credits;

        return [imageUrl, imageCredits];
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
                        credits={getImageDetails(work)[1]}
                        image={getImageDetails(work)[0]}
                        work={work}
                    />
                ))}
            </div>
        </section>
    );
}
