import { ADD_FAVORITE, DEL_FAVORITE } from "../constants";

export function addFavorite(favorite) {
    return {
        type:  ADD_FAVORITE,
        value: favorite
    }
}

export function removeFavorite(favoriteIndex) {
    return {
        type:  DEL_FAVORITE,
        value: favoriteIndex
    }
}