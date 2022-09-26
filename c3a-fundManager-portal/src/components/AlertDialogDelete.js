import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";

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
export default function AlertDialogDelete(props) {
    const [progress, setProgress] = useState('initial');
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
                {progress === 'initial' &&
                    <span>Confirm to delete this submission?</span>
                }
                {progress === 'afterDeletion' &&
                    <span>Your submission has been deleted</span>
                }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{fontSize: "28px"}}>
                    {progress === 'initial' &&
                        <span>This action cannot be undone.</span>
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {progress === 'initial' &&
                    <>
                        {props.btnCancelText && <Button onClick={handleClose} sx={{fontSize: "28px"}}>
                            {props.btnCancelText || 'Cancel'}
                        </Button>
                        }
                        <Button onClick={() => setProgress('afterDeletion')} autoFocus sx={{fontSize: "28px"}}>
                            {props.btnConfirmText || 'Confirm'}
                        </Button>
                    </>
                }
                {progress === 'afterDeletion' &&
                    <>
                        <Button onClick={confirm} autoFocus sx={{fontSize: "28px"}}>
                            Okay
                        </Button>
                    </>
                }

            </DialogActions>
        </Dialog>
    );
}
