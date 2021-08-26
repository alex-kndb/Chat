import { REQUEST_STATUS } from "../../../const";
import { getArticlesError, getArticlesPending, getArticlesSuccess } from "../actions";
import { articlesReducer } from "../reducer";

describe('reducer tests', () => {
    it('returns state with pending status after getArticlesPending action', () => {
        const expected = {
            data: [],
            request: {
                status: REQUEST_STATUS.PENDING,
                error: null,
            },
        };
        const recieved = articlesReducer([], getArticlesPending());
        expect(recieved).toEqual(expected);
    });

    it('returns state with success status after getArticlesSuccess action', () => {
        const expected = {
            data: [],
            request: {
                error: null,
                status: REQUEST_STATUS.SUCCESS,
            },
        };
        const recieved = articlesReducer([], getArticlesSuccess());
        expect(recieved).toEqual(expected);
    });

    it('returns state with error message and error status after getArticlesError action', () => {
        const error = 'error';
        const expected = {
            data: [],
            request: {
                status: REQUEST_STATUS.ERROR,
                error: error,
            },
        };
        const recieved = articlesReducer([], getArticlesError(error));
        expect(recieved).toEqual(expected);
    });
});