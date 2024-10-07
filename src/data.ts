import { IArtist, IUser, IWork } from "./interfaces";

// name structure for images: artist_image, nnn_nn
export const artists: IArtist[] = [
    {
        family_name: "möller",
        first_name: "david",
        id: "000",
        images: ["000_00"],
        work_ids: ["000_000", "000_001", "000_002", "000_003"],
    },
    {
        family_name: "stjernholm",
        first_name: "johan",
        id: "001",
        images: ["001_00"],
        work_ids: ["001_000"],
    },
];

export const user: IUser = {
    artist: false,
    id: "",
    favorite_artists: [],
    favorite_works: [],
    logged_in: false,
    password: "",
    username: "",
};

// name structure for id: artist_work, nnn_nnn
// name structure for images: artist_work_image, nnn_nnn_nn
export const works: IWork[] = [
    {
        dates: [],
        description: "Get stuff sold!",
        id: "000_000",
        images: ["000_000_00", "000_000_01"],
        places: [],
        times: [],
        title: "Advertising",
    },
    {
        dates: [],
        description: "Enhance your professional image!",
        id: "000_001",
        images: ["000_001_00", "000_001_01"],
        places: [],
        times: [],
        title: "Business Portraits",
    },
    {
        dates: [],
        description: "Get in style!",
        id: "000_002",
        images: ["000_002_00", "000_002_01"],
        places: [],
        times: [],
        title: "Fashion",
    },
    {
        dates: [],
        description: "Who are you?",
        id: "000_003",
        images: ["000_003_00", "000_003_01"],
        places: [],
        times: [],
        title: "Portraits",
    },
    {
        dates: [],
        description: "Immersive Performance Art with Generative AI",
        id: "001_000",
        images: ["001_000_00"],
        places: [],
        times: [],
        title: "Mazu: Water Legends",
    },
];
