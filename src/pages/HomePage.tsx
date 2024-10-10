import { ReactElement, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { IArtist, IImageCredits, IWork, IWorkArtist } from "../interfaces";
import { Card } from "../components";
import { TData } from "../types";
import { workArtists } from "../utils";

export function HomePage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Define states
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [imageCredits, setImageCredits] = useState<IImageCredits[]>(data[1]);
    const [works, setWorks] = useState<IWork[]>(data[2]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[3]);
    const [randomWork, setRandomWork] = useState<IWork>(
        works[Math.floor(Math.random() * works.length)]
    );

    // Set state of a new random work
    const newRandomWork = () => {
        setRandomWork(works[Math.floor(Math.random() * works.length)]);
    };

    return (
        <section className="home-page">
            <Card
                artists={workArtists(artists, randomWork.id, worksArtists)}
                imageCredits={imageCredits}
                work={randomWork}
            />
        </section>
    );
}
