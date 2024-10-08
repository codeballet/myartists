import { ReactElement, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import {
    IArtist,
    IImageCredits,
    IUser,
    IWork,
    IWorkArtist,
} from "../interfaces";
import { Card } from "../components";

type TData = [IArtist[], IImageCredits[], IUser, IWork[], IWorkArtist[]];

export function HomePage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Define states
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [imageCredits, setImageCredits] = useState<IImageCredits[]>(data[1]);
    const [user, setUser] = useState<IUser>(data[2]);
    const [works, setWorks] = useState<IWork[]>(data[3]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[4]);
    const [randomWork, setRandomWork] = useState<IWork>(
        works[Math.floor(Math.random() * works.length)]
    );

    // Capitalise first letter
    const capitaliseFLetter = (string: string): string => {
        return string.replace(/^./, string[0].toUpperCase());
    };

    // Set state of a new random work
    const newRandomWork = () => {
        setRandomWork(works[Math.floor(Math.random() * works.length)]);
    };

    // Return names for all relevant artists for a work
    const workArtists = (workId: string): string[] => {
        // Find all artists matching the work
        const filteredWorkArtists: IWorkArtist[] = worksArtists.filter(
            (item) => item.work_id === workId
        );

        // Extract all artist ids for the work
        const artistIds = filteredWorkArtists.map((item) => {
            for (let artist of artists) {
                if (artist.id === item.artist_id) {
                    return item.artist_id;
                }
            }
        });

        // Generate a list of names for the artists
        const artistNames: string[] = [];

        if (artistIds.length > 0) {
            for (let id of artistIds) {
                artists.forEach((artist) => {
                    if (artist.id === id) {
                        artistNames.push(
                            `${capitaliseFLetter(
                                artist.first_name
                            )} ${capitaliseFLetter(artist.family_name)}`
                        );
                    }
                });
            }
        }

        return artistNames;
    };

    workArtists("000_000");

    return (
        <section className="home-page">
            <Card
                artists={workArtists(randomWork.id)}
                imageCredits={imageCredits}
                work={randomWork}
            />
        </section>
    );
}
