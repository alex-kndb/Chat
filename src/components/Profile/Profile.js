import React, { useCallback, useRef, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeName, toggleName } from '../../store/profile/actions';
import { getProfileState } from '../../store/selectors';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import { useInput } from '../../utils/useInput';
import './Profile.css';

const useStyle = makeStyles({
    input: {
        width: 150,
        color: 'white',
        fontSize: 26,
        '&:after': {
            borderColor: 'white',
            borderBottomWidth: 2,
        },
        '&:before': {
            borderColor: 'white',
            borderBottomWidth: 1,
        },

    },
});

export const Profile = () => {
    const profileState = useSelector(getProfileState, shallowEqual);
    const dispatch = useDispatch();

    const toggleShow = useCallback(() => {
        dispatch(toggleName());
    }, [dispatch]);

    const { value, handleChange, resetValue } = useInput('');

    const setName = useCallback((e) => {
        e.preventDefault();
        dispatch(changeName(value));
        inputRef.current?.focus();
        resetValue();
    }, [dispatch, value, resetValue]);

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const classes = useStyle();

    return (
        <div className="profile__wrapper">
            <div className="profile">
                <h2 className="profile__header">PROFILE</h2>
                <form className="profile__form" onSubmit={setName} noValidate autoComplete="off">
                    <Input inputRef={inputRef} className={classes.input} onChange={handleChange} value={value} placeholder="Name" />
                    <button type="submit" className="profile__btn">Change</button>
                    <button type="button" className="profile__btn" onClick={toggleShow}>SHOW</button>
                </form>
                {profileState.showName && <h3 className="profile__info">Master of the profile is {profileState.name}</h3>}
            </div>
        </div>
    )
}