import { ReactElement, useContext, useState } from "react";
import { IWork } from "../interfaces";
import { FavoriteIcon } from ".";
import { UserContext } from "../context/UserContextProvider";
import { useLocation } from "react-router-dom";

interface ICardProps {
    artists: string[];
    credits?: string;
    image?: string;
    newRandomWork?: () => void;
    work: IWork;
}

export function Card({
    artists,
    credits,
    image,
    newRandomWork,
    work,
}: ICardProps): ReactElement {
    const { loggedIn } = useContext(UserContext);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();

    // Pick a random image from a work
    // const image = work.images[Math.floor(Math.random() * work.images.length)];
    // Find id for image
    // const imageId: string = images.filter((img) => img.url === image)[0].id;
    // Acquire credits for image
    // const credits = imageCredits.filter((img) => img.image_id === imageId)[0]
    //     .credit;

    const handleImageLoad = () => {
        setLoaded(true);
    };

    const handleRefresh = () => {
        setLoaded(false);
        if (newRandomWork) newRandomWork();
    };

    return (
        <section className="card">
            <div className="figure-container">
                {!loaded && <h2>Loading new image...</h2>}
                <figure className="card-figure">
                    <img src={image} alt="Art Work" onLoad={handleImageLoad} />
                    <figcaption>Photo by {credits}</figcaption>
                </figure>
            </div>

            <div className="card-text">
                <ul className="card-artists">
                    {artists.map((artist, index) => (
                        <li key={index}>{artist}</li>
                    ))}
                </ul>
                <div className="card-work">
                    <p>{work.title}</p>
                    {loggedIn && <FavoriteIcon workId={work.id} />}
                </div>
                {location.pathname === "/" ? (
                    <button className="card-refresh" onClick={handleRefresh}>
                        Show another
                    </button>
                ) : null}
            </div>
        </section>
    );
}
