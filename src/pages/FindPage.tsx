import { ReactElement, useState } from "react";
import { Card } from "../components";
import { useRouteLoaderData } from "react-router-dom";
import { TData } from "../types";
import {
    IArtist,
    IImageCredits,
    IUser,
    IWork,
    IWorkArtist,
} from "../interfaces";
import { workArtists } from "../utils";

export function FindPage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Define states
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [imageCredits, setImageCredits] = useState<IImageCredits[]>(data[1]);
    const [user, setUser] = useState<IUser>(data[2]);
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
                <h1>Add forms here</h1>
            </div>
            <div className="cards-container">
                {shuffleArray(works).map((work) => (
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
