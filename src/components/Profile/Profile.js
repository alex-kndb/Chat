import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import { changeName, toggleName } from '../../store/profile/actions';
import './Profile.css'

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
    const profileState = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const toggleShow = useCallback(() => {
        dispatch(toggleName());
    }, [dispatch]);

    const [value, setValue] = useState('');
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback((e) => {
        e.preventDefault();
        dispatch(changeName(value));
        inputRef.current?.focus();
        // setValue('');
    }, [dispatch, value]);

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
                    <button className="profile__btn" onClick={toggleShow}>SHOW</button>
                </form>
                {profileState.showName && <h3 className="profile__info">Master of the profile is {profileState.name}</h3>}
            </div>
        </div>
    )
}