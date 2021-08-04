import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, IconButton, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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

export const ChatList = ({ chats }) => {

    const classes = useStyles();

    return (
        <List classes={{ root: classes.root }} disablePadding={true}>
            {Object.values(chats).map((chat) => (
                <Link key={chat.id} to={`/home/${chat.id}`}>
                    <ListItem className={classes.li} divider={true}>
                        <ListItemText disableTypography={true}>
                            <Typography className={classes.text}>{chat.name}</Typography>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon className={classes.del} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}