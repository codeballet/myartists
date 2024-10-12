import { ReactElement, useContext } from "react";
import { IImage, IImageCredit, IWork } from "../interfaces";
import { FavoriteIcon } from ".";
import { UserContext } from "../context/UserContextProvider";
import { useLocation } from "react-router-dom";

interface ICardProps {
    artists: string[];
    imageCredits: IImageCredit[];
    images: IImage[];
    newRandomWork?: () => void;
    work: IWork;
}

export function Card({
    artists,
    imageCredits,
    images,
    newRandomWork,
    work,
}: ICardProps): ReactElement {
    const { loggedIn } = useContext(UserContext);
    const location = useLocation();

    // Pick a random image from a work
    const image = work.images[Math.floor(Math.random() * work.images.length)];
    // Find id for image
    const imageId: string = images.filter((img) => img.url === image)[0].id;
    // Acquire credits for image
    const credit = imageCredits.filter((img) => img.image_id === imageId)[0]
        .credit;

    return (
        <section className="card">
            <figure className="card-figure">
                <img src={image} alt="Art Work" />
                <figcaption>Photo by {credit}</figcaption>
            </figure>
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
                    <button className="card-refresh" onClick={newRandomWork}>
                        Show another
                    </button>
                ) : null}
            </div>
        </section>
    );
}
