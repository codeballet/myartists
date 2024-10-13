import { ReactElement, useContext, useEffect, useState } from "react";
import { IImage, IWork } from "../interfaces";
import { Card } from "../components";
import { workArtists } from "../utils";
import { UserContext } from "../context/UserContextProvider";

export function HomePage(): ReactElement {
    // Get context
    const {
        artists,
        images,
        works,
        worksArtists,
        setArtist,
        setImages,
        setWorks,
        setWorksArtists,
    } = useContext(UserContext);

    // Define states
    const [image, setImage] = useState<IImage>();
    const [randomWork, setRandomWork] = useState<IWork>(
        works[Math.floor(Math.random() * works.length)]
    );

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
                cardArtists={workArtists(artists, randomWork.id, worksArtists)}
                credits={image?.credits}
                image={image?.url}
                newRandomWork={newRandomWork}
                work={randomWork}
            />
        </section>
    );
}
