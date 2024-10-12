import { ReactElement, useState } from "react";
import { Card, SearchForm } from "../components";
import { useRouteLoaderData } from "react-router-dom";
import { TData } from "../types";
import {
    IArtist,
    IImage,
    IImageCredit,
    IWork,
    IWorkArtist,
} from "../interfaces";
import { workArtists } from "../utils";

export function FindPage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Define states
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [foundWorks, setFoundWorks] = useState<IWork[]>(data[3]);
    const [imageCredits, setImageCredits] = useState<IImageCredit[]>(data[2]);
    const [images, setImages] = useState<IImage[]>(data[1]);
    const [works, setWorks] = useState<IWork[]>(data[3]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[4]);

    // Shuffle content of array
    const shuffleArray = (arr: IWork[]): IWork[] => {
        let newArr: IWork[] = [...arr];
        newArr.sort(() => Math.random() - 0.5);
        return newArr;
    };

    return (
        <section className="find-page">
            <div className="forms-container">
                <SearchForm
                    artists={artists}
                    setFoundWorks={setFoundWorks}
                    works={works}
                    worksArtists={worksArtists}
                />
            </div>
            <div className="cards-container">
                {shuffleArray(foundWorks).map((work) => (
                    <Card
                        key={work.id}
                        artists={workArtists(artists, work.id, worksArtists)}
                        imageCredits={imageCredits}
                        images={images}
                        work={work}
                    />
                ))}
            </div>
        </section>
    );
}
