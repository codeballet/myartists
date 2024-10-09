import { ReactElement } from "react";
import { IImageCredits, IWork } from "../interfaces";

interface IHomeCardProps {
    artists: string[];
    imageCredits: IImageCredits[];
    work: IWork;
}

export function Card({
    artists,
    imageCredits,
    work,
}: IHomeCardProps): ReactElement {
    const image = work.images[Math.floor(Math.random() * work.images.length)];
    const filteredCredit = imageCredits.filter((img) => img.image === image);
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
                </div>
            </div>
        </section>
    );
}
