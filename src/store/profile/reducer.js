import { PROFILE_CHANGE_NAME, PROFILE_TOGGLE_SHOW } from './actionsTypes';

const initState = {
    name: 'Alex',
    showName: false
}

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case PROFILE_TOGGLE_SHOW:
            return {
                ...state,
                showName: !state.showName,
            };
        case PROFILE_CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }

}