import { FormEvent, ReactElement, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import { IWork } from "../interfaces";

export function EditWorkPage(): ReactElement {
    // use navigate hook
    const navigate = useNavigate();

    // Get params from URL
    const { workId } = useParams();

    // Get context
    const { works, setWorks } = useContext(UserContext);

    // Define states
    const [newImageCredits, setNewImageCredits] = useState<string>("");
    const [newImageUrl, setNewImageUrl] = useState<string>("");
    const [work, setWork] = useState<IWork>(
        works.filter((work) => work.id === workId)[0]
    );
    const [newTitle, setNewTitle] = useState<string>("");
    const [newDescription, setNewDescription] = useState<string>("");

    const saveEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Edit image
        // Edit image credits

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
        // save new works in alphabetical order
        setWorks(editedWorks.sort((a, b) => a.title.localeCompare(b.title)));

        navigate("/edit");
    };

    return (
        <section id="editWorkDetails">
            <h2>Edit "{work.title}"</h2>
            <form id="editWorkForm" onSubmit={saveEdit}>
                <div id="editTitleElements">
                    <label htmlFor="editTitle">Title:</label>
                    <input
                        autoFocus
                        id="editTitle"
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder={work.title}
                        type="text"
                        value={newTitle}
                    />
                </div>
                <div id="editDescriptionElements">
                    <label htmlFor="editDescription">Description:</label>
                    <input
                        id="editDescription"
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder={work.description}
                        type="text"
                        value={newDescription}
                    />
                </div>
                <div id="editImageUrlElements">
                    <label htmlFor="editImageUrl">Image URL:</label>
                    <input
                        id="editImageUrl"
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        placeholder="Image URL here"
                        type="text"
                        value={newImageUrl}
                    />
                </div>
                <div id="editImageCreditsElements">
                    <label htmlFor="editImageCredits">Image Credits:</label>
                    <input
                        id="editImageCredits"
                        onChange={(e) => setNewImageCredits(e.target.value)}
                        placeholder="Image copyright owner..."
                        type="text"
                        value={newImageCredits}
                    />
                </div>
                <div id="editWorkButtons">
                    <button id="editWorkButton" type="submit">
                        Save
                    </button>
                    <button
                        id="cancelEditWorkButton"
                        onClick={() => navigate("/edit")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
}
