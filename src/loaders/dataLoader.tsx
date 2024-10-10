import { artists, imageCredits, works, worksArtists } from "../data";
import { IArtist, IImageCredits, IWork, IWorkArtist } from "../interfaces";

export const dataLoader = (): (
    | IArtist[]
    | IImageCredits[]
    | IWork[]
    | IWorkArtist[]
)[] => {
    return [artists, imageCredits, works, worksArtists];
};
