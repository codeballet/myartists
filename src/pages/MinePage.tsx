import { ReactElement, useContext, useState } from "react";
import { IWork } from "../interfaces";
import { UserContext } from "../context/UserContextProvider";
import { workArtists } from "../utils";
import { Card } from "../components";

export function MinePage(): ReactElement {
    // Get context
    const {
        artists,
        favoriteWorks,
        images,
        works,
        worksArtists,
        setArtists,
        setImages,
        setWorks,
        setFavoriteWorks,
        setWorksArtists,
    } = useContext(UserContext);

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
