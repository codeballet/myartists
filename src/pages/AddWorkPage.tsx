import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import { IImage, IWork, IWorkArtist } from "../interfaces";
import { isHtmlElement } from "react-router-dom/dist/dom";

export function AddWorkPage() {
    // use navigate hook
    const navigate = useNavigate();

    // Get context
    const {
        id,
        images,
        loggedIn,
        username,
        works,
        worksArtists,
        setImages,
        setWorks,
        setWorksArtists,
    } = useContext(UserContext);

    // Define states
    const [addCredits, setAddCredits] = useState<string>("");
    const [addDescription, setAddDescription] = useState<string>("");
    const [addImage, setAddImage] = useState<string>("");
    const [addTitle, setAddTitle] = useState<string>("");

    const saveAdd = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Create an id for the work
        let workId: string = "";
        // Does the artist already have a work in db?
        const worksByArtist: IWorkArtist[] = worksArtists.filter((item) => {
            item.artist_id === id;
        });
        if (worksByArtist.length === 0) {
            // Artist has no previous works in db
            workId = `${id}_000`;
        } else {
            // Artist already has works in db
            // Get the previously highest work id suffix + 1
            const newWorkIdSuffix: number =
                Math.max(
                    ...worksByArtist
                        .map((item) => item.work_id)
                        .map((string) => parseInt(string.split("_")[1]))
                ) + 1;
            workId = `${id}_${newWorkIdSuffix}`;
        }

        // Create the new work object
        const addWork: IWork = {
            dates: [],
            description: addDescription,
            id: workId,
            images: [addImage],
            places: [],
            times: [],
            title: addTitle,
        };

        // Add the new work to works db table
        const newWorks: IWork[] = [addWork, ...works];
        setWorks(newWorks);

        // Add image address and credits to images db table
        // Create an id for the image
        let imageId = "";
        // Does work already have any images in db?
        const workImages = images.filter(
            (image) => image.id.split("_").splice(0, 2)[0] === workId
        );
        if (workImages.length === 0) {
            // No previous images for work in db
            imageId = `${workId}_00`;
        } else {
            // Work has previous images in db
            // Find the highest previous number of image + 1
            const newImageIdSuffix: number =
                Math.max(
                    ...workImages.map((image) =>
                        parseInt(image.id.split("_")[2])
                    )
                ) + 1;
            imageId = `${imageId}_${newImageIdSuffix}`;
        }

        // Create new image object
        const newImage: IImage = {
            credits: addCredits,
            id: imageId,
            url: addImage,
        };

        // Add new image to images db table
        const newImages: IImage[] = [newImage, ...images];
        setImages(newImages);

        // Add work and artist to worksArtists db table
        // Get previous highest id for worksArtists + 1
        const newWorksArtistsId: number =
            Math.max(...worksArtists.map((item) => parseInt(item.id))) + 1;

        // Add new item to worksArtists db table
        const newWorkArtist: IWorkArtist = {
            id: newWorksArtistsId.toString(),
            work_id: workId,
            artist_id: id,
        };
        const newWorksArtists: IWorkArtist[] = [...worksArtists, newWorkArtist];
        setWorksArtists(newWorksArtists);

        navigate("/edit");
    };

    return (
        <section id="addWorkDetails">
            <h2>Add a new work</h2>
            <form id="addWorkForm" onSubmit={saveAdd}>
                <div id="addTitleElements">
                    <label htmlFor="addTitle">Title:</label>
                    <input
                        autoFocus
                        id="addTitle"
                        onChange={(e) => setAddTitle(e.target.value)}
                        placeholder="Title of work..."
                        required
                        type="text"
                        value={addTitle}
                    />
                </div>
                <div id="addDescriptionElements">
                    <label htmlFor="addDescription">Description:</label>
                    <input
                        id="addDescription"
                        onChange={(e) => setAddDescription(e.target.value)}
                        placeholder="Short description of work..."
                        required
                        type="text"
                        value={addDescription}
                    />
                </div>
                <div id="addImageElements">
                    <label htmlFor="addImage">Image URL:</label>
                    <input
                        id="addImage"
                        onChange={(e) => setAddImage(e.target.value)}
                        placeholder="Internet address..."
                        required
                        type="url"
                        value={addImage}
                    />
                </div>
                <div id="addCreditsElements">
                    <label htmlFor="addCredits">Image Credits:</label>
                    <input
                        id="addCredits"
                        onChange={(e) => setAddCredits(e.target.value)}
                        placeholder="Image copyright owner..."
                        required
                        type="text"
                        value={addCredits}
                    />
                </div>
                <div id="addWorkButtons">
                    <button id="editWorkButton" type="submit">
                        Save
                    </button>
                    <button
                        id="cancelAddWorkButton"
                        onClick={() => navigate("/edit")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
}
