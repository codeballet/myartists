import { ChangeEvent, ReactElement } from "react";

interface ISearchFormProps {
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    searchTerm: string;
}

export function SearchForm({
    handleSearch,
    searchTerm,
}: ISearchFormProps): ReactElement {
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
