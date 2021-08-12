import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer"

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatReducer,
        messages: messageReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);