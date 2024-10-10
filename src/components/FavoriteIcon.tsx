import { ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

interface IFavoriteIconProps {
    workId: string;
}

export function FavoriteIcon({ workId }: IFavoriteIconProps): ReactElement {
    const { favoriteWorks, setFavoriteWorks } = useContext(UserContext);

    const setFavorite = () => {
        if (!favoriteWorks.includes(workId)) {
            // Add work to favorites list
            const newFavorites = [workId, ...favoriteWorks];
            setFavoriteWorks(newFavorites);
        } else if (favoriteWorks.includes(workId)) {
            // Remove work from favoriteslist
            const newFavorites = favoriteWorks.filter(
                (work) => work !== workId
            );
            setFavoriteWorks(newFavorites);
        }
    };

    return (
        <i onClick={setFavorite} className="favorite-icon">
            <span
                className={
                    favoriteWorks.includes(workId)
                        ? "favorite material-symbols-outlined"
                        : "material-symbols-outlined"
                }
            >
                star
            </span>
        </i>
    );
}
