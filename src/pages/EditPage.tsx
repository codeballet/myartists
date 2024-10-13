import { ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { IWork } from "../interfaces";
import { Link, useLocation } from "react-router-dom";

export function EditPage(): ReactElement {
    // Get context
    const { loggedIn, works, setWorks } = useContext(UserContext);
    // Get location
    const location = useLocation();

    const deleteWork = (deleteWork: IWork): void => {
        setWorks(works.filter((work) => work.id !== deleteWork.id));
    };

    return (
        <section className="edit-page">
            {!loggedIn ? (
                <div className="loggedOut">
                    <h2>Please login to edit your works</h2>
                </div>
            ) : (
                <div className="loggedIn">
                    <article id="editWorks">
                        {location.pathname !== "/edit/add" && (
                            <Link to="add">
                                <button id="addWorkButton">Add new work</button>
                            </Link>
                        )}
                        <h2>Listed works:</h2>
                        <ul>
                            {works
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((work) => (
                                    <li key={work.id}>
                                        {work.title}
                                        <Link to={work.id}>
                                            <button>Edit</button>
                                        </Link>
                                        <button
                                            onClick={() => deleteWork(work)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </article>
                </div>
            )}
        </section>
    );
}
