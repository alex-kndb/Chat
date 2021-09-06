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

const mockStateError = {
    ...mockState,
    articles: {
        ...mockState.articles,
        request: {
            status: REQUEST_STATUS.FAILURE,
            error: "Error",
        },
    },
};

const mockStateLoading = {
    ...mockState,
    articles: {
        ...mockState.articles,
        request: {
            status: REQUEST_STATUS.PENDING,
            error: null,
        },
    },
};


const store = configureStore([thunk]);
export const mockStore = store(() => mockState);
export const mockStoreError = store(() => mockStateError);
export const mockStoreLoading = store(() => mockStateLoading);