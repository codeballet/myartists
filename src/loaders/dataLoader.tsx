import { artists, user, works } from "../data";
import { IArtist, IUser, IWork } from "../interfaces";

export const dataLoader = (): (IArtist[] | IUser | IWork[])[] => {
    return [artists, user, works];
};
