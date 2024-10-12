import { ChangeEvent, ReactElement, useState } from "react";
import { Card, SearchForm } from "../components";
import { useRouteLoaderData } from "react-router-dom";
import { TData } from "../types";
import { IArtist, IImage, IWork, IWorkArtist } from "../interfaces";
import { workArtists } from "../utils";

export function FindPage(): ReactElement {
    // Acquire data from loader (simulating a DB)
    const data = useRouteLoaderData("app") as TData;

    // Define states from loader data
    const [artists, setArtists] = useState<IArtist[]>(data[0]);
    const [foundWorks, setFoundWorks] = useState<IWork[]>(data[2]);
    const [images, setImages] = useState<IImage[]>(data[1]);
    const [works, setWorks] = useState<IWork[]>(data[2]);
    const [worksArtists, setWorksArtists] = useState<IWorkArtist[]>(data[3]);

    // Define states for search
    const [searchTerm, setSearchTerm] = useState<string>("");

    const getImageDetails = (work: IWork): string[] => {
        // Get image url
        const imageUrl: string =
            work.images[Math.floor(Math.random() * work.images.length)];

        // Get image credits
        const imageCredits = images.filter((img) => img.url === imageUrl)[0]
            .credits;

        return [imageUrl, imageCredits];
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
        const find = e.target.value.toLowerCase();

        // Find matching works from title and description
        const matchingWorks = works.filter(
            (work) =>
                work.title.toLowerCase().includes(find) ||
                work.description.toLowerCase().includes(find)
        );

        // Find matching artists names
        const matchingArtists = artists.filter((artist) => {
            const fullName = `${artist.first_name.toLowerCase()} ${artist.family_name.toLowerCase()}`;
            return fullName.includes(find);
        });

        // Filter worksArtists list for matching items
        const matchingWorksArtists = worksArtists.filter((item) => {
            for (let artist of matchingArtists) {
                if (artist.id === item.artist_id) {
                    return true;
                }
            }
        });

        // Find works with found work Ids
        const worksByIdMatch = works.filter((work) => {
            for (let item of matchingWorksArtists) {
                if (work.id === item.work_id) {
                    return true;
                }
            }
        });

        // Get list of all unique found work ids
        const allMatchingWorks = matchingWorks.concat(worksByIdMatch);
        const allMatchingWorkIds = allMatchingWorks.map((work) => work.id);
        const uniqueMatchingWorkIds = [...new Set(allMatchingWorkIds)];

        // Extract all the unique work ids into new array of works
        const uniqueMatchingWorks = works.filter((work) => {
            for (let id of uniqueMatchingWorkIds) {
                if (id === work.id) {
                    return true;
                }
            }
        });

        setFoundWorks(uniqueMatchingWorks);
    };

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
                    handleSearch={handleSearch}
                    searchTerm={searchTerm}
                />
            </div>
            <div className="cards-container">
                {shuffleArray(foundWorks).map((work) => (
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
