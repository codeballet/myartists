import { FormEvent, ReactElement, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import { IWork } from "../interfaces";

export function WorkDetailsPage(): ReactElement {
    // Get params from URL
    const { workId } = useParams();

    // Get context
    const { works, setWorks } = useContext(UserContext);

    // Set states
    const [work, setWork] = useState<IWork>(
        works.filter((work) => work.id === workId)[0]
    );
    const [newTitle, setNewTitle] = useState<string>("");

    const saveEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create new work with edited values
        const editedWork: IWork = {
            dates: work.dates,
            description: work.description,
            id: work.id,
            images: work.images,
            places: work.places,
            times: work.times,
            title: newTitle,
        };
        setWork(editedWork);

        // Replace old work with edited work in list of works
        const filteredWorks: IWork[] = works.filter(
            (work) => work.id !== workId
        );
        const editedWorks = [editedWork, ...filteredWorks];
        setWorks(editedWorks);
    };

    return (
        <section id="editWorkDetails">
            <h2>Work Details Page for work id: {workId}</h2>
            <p>{work.title}</p>
            <form onSubmit={saveEdit}>
                <label htmlFor="editTitle">Edit title</label>
                <input
                    id="editTitle"
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder={work.title}
                    type="text"
                    value={newTitle}
                />
                <button id="editWorkButton" type="submit">
                    Save
                </button>
            </form>
        </section>
    );
}
