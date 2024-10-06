import { ReactElement } from "react";
import { Card } from "../components";

export function FindPage(): ReactElement {
    return (
        <section className="find-page">
            <h2>FindPage</h2>
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}
