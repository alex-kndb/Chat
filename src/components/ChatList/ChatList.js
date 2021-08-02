import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, IconButton, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
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
    li_text: {
        fontSize: 16,
        fontWeight: 500
    },
});

export const ChatList = () => {

    const chatArr = [
        { id: 111, name: 'Chat #' },
        { id: 222, name: 'Chat #' },
        { id: 333, name: 'Chat #' },
    ];

    const classes = useStyles();

    // let renderChatList = useCallback((chat) => {
    //     // <ListItem className={classes.li} divider={true}>
    //     <ListItem divider={true}>
    //         <ListItemText>{chat.name} {chat.id}</ListItemText>
    //         <ListItemSecondaryAction>
    //             <IconButton edge="end" aria-label="delete">
    //                 {/* <DeleteIcon className={classes.del} /> */}
    //                 <DeleteIcon />
    //             </IconButton>
    //         </ListItemSecondaryAction>
    //     </ListItem>
    // }, []);

    return (
        <List classes={{ root: classes.root }} disablePadding={true}>
            {/* {chatArr.map(renderChatList)} */}
            {chatArr.map((chat) => (
                <ListItem className={classes.li} divider={true}>
                    <ListItemText classes={{ root: classes.li_text }} disableTypography={true} >{chat.name}{chat.id}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon className={classes.del} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>




        // <div className={classes.root}>
        //     <List disablePadding={true}>
        //         <ListItem className={classes.li} divider={true}>
        //             <ListItemText>Chat #1</ListItemText>
        //             <ListItemSecondaryAction>
        //                 <IconButton edge="end" aria-label="delete">
        //                     <DeleteIcon className={classes.del} />
        //                 </IconButton>
        //             </ListItemSecondaryAction>
        //         </ListItem>
        //         <ListItem className={classes.li} divider={true}>
        //             <ListItemText>Chat #2</ListItemText>
        //             <ListItemSecondaryAction>
        //                 <IconButton edge="end" aria-label="delete">
        //                     <DeleteIcon className={classes.del} />
        //                 </IconButton>
        //             </ListItemSecondaryAction>
        //         </ListItem>
        //         <ListItem className={classes.li} divider={true}>
        //             <ListItemText>Chat #3</ListItemText>
        //             <ListItemSecondaryAction>
        //                 <IconButton edge="end" aria-label="delete">
        //                     <DeleteIcon className={classes.del} />
        //                 </IconButton>
        //             </ListItemSecondaryAction>
        //         </ListItem>
        //     </List>
        // </div>

    )
}