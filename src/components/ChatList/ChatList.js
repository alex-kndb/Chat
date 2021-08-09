import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ChatList.css';

const useStyles = makeStyles({
    root: {
        color: 'cornflowerblue',
        backgroundColor: 'whitesmoke',
        width: 300,
    },
    li: {
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    text: {
        color: 'cornflowerblue',
        fontSize: 16,
        fontWeight: 500,
        textTransform: 'uppercase',
    },
});

export const ChatList = ({ chats, removeChat }) => {

    const classes = useStyles();

    return (
        <List component="nav" classes={{ root: classes.root }} disablePadding={true}>
            {Object.values(chats).map((chat) => (
                <Link
                    className="link"
                    key={chat.id}
                    to={`/home/${chat.id}`}>
                    <ListItem
                        className={classes.li}
                        divider={true}>
                        <ListItemText
                            classes={{ primary: classes.text }}
                            primary={chat.name}>
                        </ListItemText>
                        <button
                            className="btn"
                            edge="end"
                            aria-label="delete"
                            onClick={removeChat}
                            id={chat.id}>
                            <DeleteIcon />
                        </button>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}