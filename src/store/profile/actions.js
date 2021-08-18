import { PROFILE_CHANGE_NAME, PROFILE_TOGGLE_SHOW } from './actionsTypes';

export const changeName = (name) => ({
    type: PROFILE_CHANGE_NAME,
    payload: name,
});

export const toggleName = () => ({
    type: PROFILE_TOGGLE_SHOW,
});