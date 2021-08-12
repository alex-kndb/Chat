import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ChatList.css';
import { deleteChat } from '../../store/chats/actions';
import { deleteMessages } from '../../store/messages/actions';

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

export const ChatList = ({ chatId }) => {
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();

    const removeChat = useCallback((e) => {
        let btnId = e.target.id;
        // console.log('button id --------', btnId);
        dispatch(deleteChat(btnId));
        dispatch(deleteMessages(btnId));
    }, [dispatch]);

    const classes = useStyles();

    return (
        <List classes={{ root: classes.root }} disablePadding={true}>
            {chats.map((chat) => (
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