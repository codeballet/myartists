import { IArtist, IWork, IWorkArtist } from "./interfaces";

// Capitalise first letter
const capitaliseFLetter = (string: string): string => {
    return string.replace(/^./, string[0].toUpperCase());
};

// Shuffle content of array
export const shuffleArray = (arr: IWork[]): IWork[] => {
    let newArr: IWork[] = [...arr];
    newArr.sort(() => Math.random() - 0.5);
    return newArr;
};

// Return names for all relevant artists for a work
export const workArtists = (
    artists: IArtist[],
    workId: string,
    worksArtists: IWorkArtist[]
): string[] => {
    // Find all artists matching the work
    const filteredWorkArtists: IWorkArtist[] = worksArtists.filter(
        (item) => item.work_id === workId
    );

    // Extract all artist ids for the work
    const artistIds = filteredWorkArtists.map((item) => {
        for (let artist of artists) {
            if (artist.id === item.artist_id) {
                return item.artist_id;
            }
        }
    });

    // Generate a list of names for the artists
    const artistNames: string[] = [];

    if (artistIds.length > 0) {
        for (let id of artistIds) {
            artists.forEach((artist) => {
                if (artist.id === id) {
                    artistNames.push(
                        `${capitaliseFLetter(
                            artist.first_name
                        )} ${capitaliseFLetter(artist.family_name)}`
                    );
                }
            });
        }
    }

    return artistNames;
};
