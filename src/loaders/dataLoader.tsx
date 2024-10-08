import { artists, imageCredits, user, works, worksArtists } from "../data";
import {
    IArtist,
    IImageCredits,
    IUser,
    IWork,
    IWorkArtist,
} from "../interfaces";

export const dataLoader = (): (
    | IArtist[]
    | IImageCredits[]
    | IUser
    | IWork[]
    | IWorkArtist[]
)[] => {
    return [artists, imageCredits, user, works, worksArtists];
};
