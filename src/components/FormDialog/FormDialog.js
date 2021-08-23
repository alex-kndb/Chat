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
import { useInput } from '../../utils/useInput';

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const { value, handleChange, resetValue } = useInput('');

    const onAddNewChat = () => {
        dispatch(addChat(value));
        resetValue();
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen} className="App-header__menu">
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
                        value={value}
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