import { ToastAndroid } from "react-native";
import { ADD_FAVORITE, DEL_FAVORITE } from "../constants";

const initialState = {
    favorites: []
};

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            ToastAndroid.show("Film ajouté aux favoris", ToastAndroid.SHORT)
            return  {
                ...state,
                favorites: [...state.favorites, action.value]
            };
        case DEL_FAVORITE:
            ToastAndroid.show("Film rétiré des favoris", ToastAndroid.SHORT)
            return  {
                ...state,
                favorites: state.favorites.filter((favorites) => favorites.imdbID !=action.value)
            };
        default:
            return state;
    }
}

export default moviesReducers;