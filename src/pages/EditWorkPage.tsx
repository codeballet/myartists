import { FormEvent, ReactElement, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import { IWork } from "../interfaces";

export function EditWorkPage(): ReactElement {
    // Navigate hook
    const navigate = useNavigate();

    // Get params from URL
    const { workId } = useParams();

    // Get context
    const { works, setWorks } = useContext(UserContext);

    // Define states
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
            title: newTitle ? newTitle : work.title,
        };
        setWork(editedWork);

        // Replace old work with edited work in list of works
        const filteredWorks: IWork[] = works.filter(
            (work) => work.id !== workId
        );
        const editedWorks = [editedWork, ...filteredWorks];
        setWorks(editedWorks);

        navigate("/edit");
    };

    return (
        <section id="editWorkDetails">
            <h2>Edit "{work.title}"</h2>
            <p>{work.title}</p>
            <form onSubmit={saveEdit}>
                <label htmlFor="editTitle">Title:</label>
                <input
                    autoFocus
                    id="editTitle"
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder={work.title}
                    type="text"
                    value={newTitle}
                />
                <button id="editWorkButton" type="submit">
                    Save
                </button>
                <button
                    id="cancelEditWorkButton"
                    onClick={() => navigate("/edit")}
                >
                    Cancel
                </button>
            </form>
        </section>
    );
}
