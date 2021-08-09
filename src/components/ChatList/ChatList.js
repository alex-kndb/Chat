import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './ChatList.css';

const useStyles = makeStyles({
    root: {
        color: 'cornflowerblue',
        backgroundColor: 'whitesmoke',
        width: 300,
        fontSize: 16,
        fontWeight: 500,
    },
    del: {
        color: 'cornflowerblue',
    },
    li: {
        '&:hover': {
            boxShadow: '0 0 5px 1px rgba(100, 149, 237, 0.5)',
            backgroundColor: 'white',
        },
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500
    },
});

export const ChatList = ({ chats, removeChat }) => {

    const classes = useStyles();

    return (
        <List classes={{ root: classes.root }} disablePadding={true}>
            {Object.values(chats).map((chat) => (
                <Link className="link" key={chat.id} to={`/home/${chat.id}`}>
                    <ListItem className={classes.li} divider={true}>
                        <ListItemText disableTypography={true} classes={{ root: classes.text }}>{chat.name}</ListItemText>
                        <button className="btn" edge="end" aria-label="delete" onClick={removeChat} id={chat.id}>DEL</button>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}