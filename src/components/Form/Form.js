import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './Form.css';

const useStyles = makeStyles({
    btn: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 10,
        right: 10,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: '0 0 5px 1px rgba(100, 149, 237, 0.5)',
            backgroundColor: 'white',
        },
    },
    input: {
        width: '100%',
    },
});

export const Form = ({ onSendMessage }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const { name } = useSelector(state => state.profile);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(
            {
                author: name,
                text: value,
                id: Date.now()
            });
        // onSendMessage(value);
        inputRef.current?.focus();
        setValue('');
    };

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const classes = useStyles();

    return (
        <form
            noValidate
            className="form"
            onSubmit={handleSubmit}
            autoComplete="off">
            <TextField
                classes={{ root: classes.input }}
                type="text"
                value={value}
                inputRef={inputRef}
                onChange={handleChange}
                id="outlined-basic"
                label="Write here a message..."
                variant="outlined"
            />
            <Button
                aria-label="send"
                classes={{ root: classes.btn }}
                variant="contained"
                type="submit">
                <SendIcon style={{ color: 'cornflowerblue' }}></SendIcon>
            </Button>
        </form >
    )
};