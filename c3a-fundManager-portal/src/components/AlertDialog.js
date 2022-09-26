import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

/**
 * props:
 * {useState} dialogState
 * {useState function} setDialogState
 * {callback} actionAfterConfirm
 * {string} title
 * {string} description
 * {string} btnConfirmText
 * {string} btnCancelText
 */
export default function AlertDialog(props) {
    const handleClose = () => {
        props.setDialogState(false);
    }
    const confirm = () => {
        handleClose();
        if (props.actionAfterConfirm) props.actionAfterConfirm();
    }
    return (
        <Dialog
            open={props.dialogState}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{fontSize: "36px"}}>
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{fontSize: "28px"}}>
                    {props.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {props.btnCancelText && <Button onClick={handleClose} sx={{fontSize: "28px"}}>
                    {props.btnCancelText || 'Cancel'}
                </Button>}
                <Button onClick={confirm} autoFocus sx={{fontSize: "28px"}}>
                    {props.btnConfirmText || 'Confirm'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
