import { ChangeEvent, ReactElement } from "react";
import { IWork } from "../interfaces";

interface ISearchFormProps {
    foundWorks: IWork[];
    setFoundWorks: (newWorks: IWork[]) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    works: IWork[];
    setWorks: (newWorks: IWork[]) => void;
}

export function SearchForm({
    foundWorks,
    setFoundWorks,
    searchTerm,
    setSearchTerm,
    works,
    setWorks,
}: ISearchFormProps): ReactElement {
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setSearchTerm(e.target.value);

        const newWorks = works.filter((work) =>
            work.title.includes(e.target.value)
        );
        setFoundWorks(newWorks);
    };
    return (
        <form id="searchForm">
            <label htmlFor="searchInput" id="searchLabel">
                What do you want to find?
            </label>
            <input
                autoFocus
                id="searchInput"
                onChange={search}
                placeholder="Search term..."
                type="text"
                value={searchTerm}
            />
            <button>Search</button>
        </form>
    );
}
