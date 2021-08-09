import { PROFILE_TOGGLE_SHOW } from './actions';

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
        default:
            return state;
    }


}