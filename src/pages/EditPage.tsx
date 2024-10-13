import { ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { NewWorkForm } from "../components";
import { IWork } from "../interfaces";
import { Link } from "react-router-dom";

export function EditPage(): ReactElement {
    // Get context
    const { loggedIn, works, setWorks } = useContext(UserContext);

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
                    <article id="newWork">
                        <h2>Add new work:</h2>
                        <NewWorkForm />
                    </article>
                    <article id="editWorks">
                        <h2>Listed works:</h2>
                        <ul>
                            {works.map((work) => (
                                <li key={work.id}>
                                    {work.title}
                                    <Link to={work.id}>
                                        <button>Edit</button>
                                    </Link>

                                    <button onClick={() => deleteWork(work)}>
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
