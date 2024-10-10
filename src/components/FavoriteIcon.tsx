import { ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

interface IFavoriteIconProps {
    workId: string;
}

export function FavoriteIcon({ workId }: IFavoriteIconProps): ReactElement {
    const { favoriteWorks, setFavoriteWorks } = useContext(UserContext);

    const addFavorite = () => {
        if (!favoriteWorks.includes(workId)) {
            const newFavorites = [workId, ...favoriteWorks];
            setFavoriteWorks(newFavorites);
        }
    };

    return (
        <i onClick={addFavorite} className="favorite-icon">
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
