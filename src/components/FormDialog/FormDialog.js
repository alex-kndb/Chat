import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ChatIcon from '@material-ui/icons/Chat';
import { addChat } from '../../store/chats/actions';

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newChatName, setNewChatName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddNewChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className="App-header__menu">
                <ChatIcon></ChatIcon>
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new chat</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter name for new chat!
                    </DialogContentText>
                    <TextField
                        onChange={handleChange}
                        value={newChatName}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Chatname"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onAddNewChat} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}