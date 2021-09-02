import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { REQUEST_STATUS } from "../const";

const mockState = {
    articles: {
        data: [],
        request: {
            status: REQUEST_STATUS.IDLE,
            error: null,
        },
    },
};

const store = configureStore([thunk]);
export const mockStore = store(() => mockState);