export interface IArtist {
    id: string;
    family_name: string;
    first_name: string;
    work_id: string[];
}

export interface IUser {
    favorite_artist: string[];
    favorite_work: string[];
    id: string;
    logged_in: boolean;
}

export interface IWork {
    date: string[];
    description: string;
    id: string;
    place: string[];
    time: string[];
    title: string;
}
