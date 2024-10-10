import { ReactElement, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

export function FavoriteIcon(): ReactElement {
    const { favoriteWorks, setFavoriteWorks } = useContext(UserContext);
    return (
        <i
            onClick={() => console.log("Icon clicked")}
            className="favorite-icon"
        >
            <span className="material-symbols-outlined">star</span>
        </i>
    );
}
