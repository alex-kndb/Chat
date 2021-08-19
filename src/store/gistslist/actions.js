import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS } from "./actionTypes";
import { API_URL } from '../../const';

export const getArticlesPending = () => ({
    type: REQUEST_PENDING,
});

export const getArticlesSuccess = (articles) => ({
    type: REQUEST_SUCCESS,
    payload: articles,
});

export const getArticlesError = (error) => ({
    type: REQUEST_ERROR,
    payload: error,
});

export const getArticlesWithThunk = () => async (dispatch) => {
    dispatch(getArticlesPending());
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`)
        };
        const result = await response.json();
        dispatch(getArticlesSuccess(result.data));
    } catch (error) {
        dispatch(getArticlesError(true));
    }
};