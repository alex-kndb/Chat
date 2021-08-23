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
            backgroundColor: 'whitesmoke',

        },
    },
    text: {
        color: 'cornflowerblue',
        textTransform: 'uppercase',
    },
    select: {
        color: 'white',
    },
});

export const ChatList = ({ chats, chatId, removeChat }) => {
    const classes = useStyles();

    return (
        <List classes={{ root: classes.root }} disablePadding={true}>
            {chats.map((chat) => (
                <Link
                    className="link"
                    key={chat.id}
                    to={`/home/chats/${chat.id}`}>
                    <ListItem
                        selected={chat.id === chatId ? true : false}
                        classes={{ selected: classes.select }}
                        className={classes.li}
                        divider={true}>
                        <ListItemText
                            classes={{ primary: classes.text }}
                            primary={chat.name}>
                        </ListItemText>
                        <button
                            className="chatList__btn"
                            edge="end"
                            aria-label="delete"
                            onClick={() => removeChat(chat.id)}
                            id={chat.id}>
                            <DeleteIcon />
                        </button>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}