import { ReactElement, useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { IArtist, IImage, IWork, IWorkArtist } from "../interfaces";
import { Card } from "../components";
import { TData } from "../types";
import { workArtists } from "../utils";

export function HomePage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Define states
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [images, setImages] = useState<IImage[]>(data[1]);
    const [image, setImage] = useState<IImage>();
    const [randomWork, setRandomWork] = useState<IWork>(
        data[2][Math.floor(Math.random() * data[3].length)]
    );
    const [works, setWorks] = useState<IWork[]>(data[2]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[3]);

    useEffect(() => {
        const randomImageUrl: string =
            randomWork.images[
                Math.floor(Math.random() * randomWork.images.length)
            ];
        const randomImage: IImage = images.filter(
            (image) => image.url === randomImageUrl
        )[0];
        setImage(randomImage);
    }, []);

    // Get a new random work
    const newRandomWork = () => {
        let newWork = works[Math.floor(Math.random() * works.length)];

        // Check if the new work is same as before
        while (newWork === randomWork) {
            newWork = works[Math.floor(Math.random() * works.length)];
        }
        setRandomWork(newWork);

        // Get a random image from the work
        const randomImageUrl: string =
            newWork.images[Math.floor(Math.random() * newWork.images.length)];
        const randomImage: IImage = images.filter(
            (image) => image.url === randomImageUrl
        )[0];
        setImage(randomImage);
    };

    return (
        <section className="home-page">
            <Card
                artists={workArtists(artists, randomWork.id, worksArtists)}
                credits={image?.credits}
                image={image?.url}
                newRandomWork={newRandomWork}
                work={randomWork}
            />
        </section>
    );
}
