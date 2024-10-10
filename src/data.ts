import { IArtist, IImageCredits, IWork, IWorkArtist } from "./interfaces";

// name structure for images: artist_image, nnn_nn
export const artists: IArtist[] = [
    {
        family_name: "möller",
        first_name: "david",
        id: "000",
        images: ["000_00"],
    },
    {
        family_name: "stjernholm",
        first_name: "johan",
        id: "001",
        images: ["001_00"],
    },
    {
        family_name: "brorsson",
        first_name: "christine",
        id: "002",
        images: ["002_00"],
    },
];

export const imageCredits: IImageCredits[] = [
    {
        image_id: "000_00",
        credit: "David Möller",
    },
    {
        image_id: "000_000_00",
        credit: "David Möller",
    },
    {
        image_id: "000_000_01",
        credit: "David Möller",
    },
    {
        image_id: "000_001_00",
        credit: "David Möller",
    },
    {
        image_id: "000_001_01",
        credit: "David Möller",
    },
    {
        image_id: "000_002_00",
        credit: "David Möller",
    },
    {
        image_id: "000_002_01",
        credit: "David Möller",
    },
    {
        image_id: "000_003_00",
        credit: "David Möller",
    },
    {
        image_id: "000_003_01",
        credit: "David Möller",
    },
    {
        image_id: "001_00",
        credit: "Johan Stjernholm",
    },
    {
        image_id: "001_000_00",
        credit: "Johan Stjernholm",
    },
    {
        image_id: "002_00",
        credit: "Emil Forsander",
    },
    {
        image_id: "002_000_00",
        credit: "Emil Forsander",
    },
    {
        image_id: "002_001_00",
        credit: "AdeY",
    },
    {
        image_id: "002_001_01",
        credit: "AdeY",
    },
];

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
        description: "Live with style!",
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
        description: "Immersive Performance Art with Generative AI.",
        id: "001_000",
        images: ["001_000_00"],
        places: [],
        times: [],
        title: "Mazu: Water Legends",
    },
    {
        dates: [],
        description: "Platsspecifikt verk på Kronohäktet i Ängelholm.",
        id: "002_000",
        images: ["002_000_00"],
        places: [],
        times: [],
        title: "Dans genom väggarna",
    },
    {
        dates: [],
        description: "Christine Brorsson in RoomX Palladium.",
        id: "002_001",
        images: ["002_001_00", "002_001_01"],
        places: [],
        times: [],
        title: "RoomX Palladium",
    },
];

export const worksArtists: IWorkArtist[] = [
    {
        id: "0001",
        work_id: "000_000",
        artist_id: "000",
    },
    {
        id: "0002",
        work_id: "000_001",
        artist_id: "000",
    },
    {
        id: "0003",
        work_id: "000_002",
        artist_id: "000",
    },
    {
        id: "0004",
        work_id: "000_003",
        artist_id: "000",
    },
    {
        id: "0005",
        work_id: "001_000",
        artist_id: "001",
    },
    {
        id: "0006",
        work_id: "002_000",
        artist_id: "002",
    },
    {
        id: "0007",
        work_id: "002_001",
        artist_id: "002",
    },
];
