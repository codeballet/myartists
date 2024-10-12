import { artists, imageCredits, images, works, worksArtists } from "../data";
import { TData } from "../types";

export const dataLoader = (): TData => {
    return [artists, images, imageCredits, works, worksArtists];
};
