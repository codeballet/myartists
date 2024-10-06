import { ReactElement } from "react";

export function Card(): ReactElement {
    return (
        <section className="card">
            <figure className="card-figure">
                <img src="" alt="Art Work" />
            </figure>
            <div className="card-text">
                <div>
                    <p>Name</p>
                    <p>Surname</p>
                </div>
                <div>
                    <p>Info about Art Work</p>
                </div>
            </div>
        </section>
    )
}