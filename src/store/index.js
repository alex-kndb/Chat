import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatReducer,
        messages: messageReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
);