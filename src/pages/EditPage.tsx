import { ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { IWork } from "../interfaces";
import { Link, useLocation } from "react-router-dom";

export function EditPage(): ReactElement {
    // Get context
    const {
        id,
        images,
        loggedIn,
        works,
        setImages,
        worksArtists,
        setWorks,
        setWorksArtists,
    } = useContext(UserContext);
    // Get location
    const location = useLocation();

    const deleteWork = (deleteWork: IWork): void => {
        // Delete image from images table in db
        setImages(
            images.filter((image) => !deleteWork.images.includes(image.url))
        );

        // Delete entry from worksArtists table in db
        setWorksArtists(
            worksArtists.filter(
                (entry) =>
                    entry.artist_id !== id && entry.work_id !== deleteWork.id
            )
        );

        // Delete work from works table in db
        setWorks(works.filter((work) => work.id !== deleteWork.id));
    };

    // Acquire random image for work from images db table
    const randomWorkImage = (work: IWork): string => {
        const workImages: string[] = images
            .filter((image) => work.images.includes(image.url))
            .map((image) => image.url);
        return workImages[Math.floor(Math.random() * workImages.length)];
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
                                    <li className="edit-work-li" key={work.id}>
                                        <figure>
                                            <img
                                                src={randomWorkImage(work)}
                                                alt="Art Work"
                                            />
                                        </figure>
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
