import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesReducers from "./reducers/moviesReducers";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['moviesReducers'],
    blacklist: [],
}

const rootReducer = combineReducers(
    {
        moviesReducers
    }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk))

const persistor = persistStore(store);

export { store, persistor }