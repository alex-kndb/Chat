import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./gistslist/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messageReducer,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);