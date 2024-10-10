import { ReactElement, useContext } from "react";
import { IImageCredits, IWork } from "../interfaces";
import { FavoriteIcon } from ".";
import { UserContext } from "../context/UserContextProvider";
import { useLocation } from "react-router-dom";

interface ICardProps {
    artists: string[];
    imageCredits: IImageCredits[];
    newRandomWork?: () => void;
    work: IWork;
}

export function Card({
    artists,
    imageCredits,
    newRandomWork,
    work,
}: ICardProps): ReactElement {
    const { loggedIn } = useContext(UserContext);
    const location = useLocation();

    const image = work.images[Math.floor(Math.random() * work.images.length)];
    const filteredCredit = imageCredits.filter((img) => img.image_id === image);
    const credit = filteredCredit[0].credit;

    return (
        <section className="card">
            <figure className="card-figure">
                <img src={`src/assets/${image}.jpg`} alt="Art Work" />
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
