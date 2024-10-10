import { ChangeEvent, ReactElement, useState } from "react";
import { IArtist, IWork, IWorkArtist } from "../interfaces";

interface ISearchFormProps {
    artists: IArtist[];
    setFoundWorks: (newWorks: IWork[]) => void;
    works: IWork[];
    worksArtists: IWorkArtist[];
}

export function SearchForm({
    artists,
    setFoundWorks,
    works,
    worksArtists,
}: ISearchFormProps): ReactElement {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        const find = e.target.value.toLowerCase();
        setSearchTerm(find);

        // Find matching works from title and description
        const matchingWorks = works.filter(
            (work) =>
                work.title.toLowerCase().includes(find) ||
                work.description.toLowerCase().includes(find)
        );

        // Find matching artists names
        const matchingArtists = artists.filter(
            (artist) =>
                artist.first_name.toLowerCase().includes(find) ||
                artist.family_name.toLowerCase().includes(find)
        );

        // Filter worksArtists list for matching items
        const matchingWorksArtists = worksArtists.filter((item) => {
            for (let artist of matchingArtists) {
                if (artist.id === item.artist_id) {
                    return true;
                }
            }
        });

        // Find works with found work Ids
        const worksByIdMatch = works.filter((work) => {
            for (let item of matchingWorksArtists) {
                if (work.id === item.work_id) {
                    return true;
                }
            }
        });

        // Get list of all unique found work ids
        const allMatchingWorks = matchingWorks.concat(worksByIdMatch);
        const allMatchingWorkIds = allMatchingWorks.map((work) => work.id);
        const uniqueMatchingWorkIds = [...new Set(allMatchingWorkIds)];

        // Extract all the unique work ids into new array of works
        const uniqueMatchingWorks = works.filter((work) => {
            for (let id of uniqueMatchingWorkIds) {
                if (id === work.id) {
                    return true;
                }
            }
        });

        setFoundWorks(uniqueMatchingWorks);
    };

    return (
        <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchInput" id="searchLabel">
                Who or what do you want to find?
            </label>
            <input
                autoFocus
                id="searchInput"
                onChange={handleSearch}
                placeholder="Search term..."
                type="text"
                value={searchTerm}
            />
        </form>
    );
}
