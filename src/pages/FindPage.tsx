import { ChangeEvent, ReactElement, useContext, useState } from "react";
import { Card, SearchForm } from "../components";
import { IWork } from "../interfaces";
import { shuffleArray, workArtists } from "../utils";
import { UserContext } from "../context/UserContextProvider";

export function FindPage(): ReactElement {
    // Get context
    const {
        artists,
        images,
        works,
        worksArtists,
        setArtists,
        setImages,
        setWorks,
        setWorksArtists,
    } = useContext(UserContext);

    // Define states
    const [foundWorks, setFoundWorks] = useState<IWork[]>(shuffleArray(works));
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Acquire url and credits for image
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

    return (
        <section className="find-page">
            <div className="forms-container">
                <SearchForm
                    handleSearch={handleSearch}
                    searchTerm={searchTerm}
                />
            </div>
            <div className="cards-container">
                {foundWorks.map((work) => (
                    <Card
                        key={work.id}
                        cardArtists={workArtists(
                            artists,
                            work.id,
                            worksArtists
                        )}
                        credits={getImageDetails(work)[1]}
                        image={getImageDetails(work)[0]}
                        work={work}
                    />
                ))}
            </div>
        </section>
    );
}
