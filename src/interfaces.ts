export interface IArtist {
    family_name: string;
    first_name: string;
    id: string;
    images: string[];
}

export interface IImageCredits {
    image: string;
    credit: string;
}

export interface IUser {
    artist: boolean;
    favorite_artists: string[];
    favorite_works: string[];
    id: string;
    logged_in: boolean;
    password: string;
    username: string;
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
