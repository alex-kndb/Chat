import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_TOGGLE_SHOW } from '../../store/actions';
import './Profile.css'

export const Profile = () => {
    const profileState = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_TOGGLE_SHOW
        });
    };

    return (
        <div className="profile__wrapper">
            <div className="profile">
                <h2 className="profile__header">PROFILE</h2>
                <button className="profile__btn" onClick={toggleShow}>Show Profile Info</button>
                {profileState.showName && <h3 className="profile__info">Master of the profile is {profileState.name}</h3>}
            </div>
        </div>
    )
}
