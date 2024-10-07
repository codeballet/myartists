export interface IArtist {
    family_name: string;
    first_name: string;
    id: string;
    images: string[];
    work_ids: string[];
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
