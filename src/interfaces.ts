export interface IArtist {
    family_name: string;
    first_name: string;
    id: string;
    images: string[];
}

export interface IImage {
    id: string;
    url: string;
}

export interface IImageCredit {
    image_id: string;
    credit: string;
}

export interface IWork {
    dates: string[];
    description: string;
    id: string;
    images: string[];
    places: string[];
    times: string[];
    title: string;
}

export interface IWorkArtist {
    id: string;
    work_id: string;
    artist_id: string;
}
