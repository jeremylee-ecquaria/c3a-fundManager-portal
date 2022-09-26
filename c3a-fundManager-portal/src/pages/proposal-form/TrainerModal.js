import {Dialog, DialogActions, DialogContent} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import branding from "../../css/branding.module.scss";
import {useState} from "react";
import Button from "@mui/material/Button";

/**
 * props:
 * {useState} dialogState
 * {useState function} setDialogState
 *
 * {object} trainer
 * {callback} updateTrainer
 */
function TrainerModal(props) {
    let trainer = props.trainer;
    const setTrainer = props.setTrainer;
    const handleClose = () => {
        props.setDialogState(false);
    }
    const confirm = () => {
        handleClose();
        props.saveTrainers();
    }


    return (
        <Dialog open={props.dialogState} onClose={handleClose}>
            <DialogTitle className={branding.heading}>{trainer.id ? 'Edit Trainer' : 'Add Trainer'}</DialogTitle>
            <DialogContent>
                <div>
                    <div className={branding.coFormGroup}>
                        <div className={branding.coFormLabel}>
                            Name
                        </div>
                        <div className={branding.coFromControl}>
                            <input type="text" value={trainer.name} onChange={(event) => setTrainer({
                                ...trainer,
                                name: event.target.value
                            })}/>
                        </div>
                    </div>
                    <div className={branding.coFormGroup}>
                        <div className={branding.coFormLabel}>
                            Profile
                        </div>
                        <div className={branding.coFromControl}>
                            <textarea value={trainer.profile} onChange={(event) => setTrainer({
                                ...trainer,
                                profile: event.target.value
                            })}/>
                        </div>
                    </div>
                    <div className={branding.coFormGroup}>
                        <div className={branding.coFormLabel}>
                            Source
                        </div>
                        <div className={branding.coFromControl}>
                            {['In-house', 'External'].map((x) => (
                                <span style={{marginRight: "14px"}} key={x}>
                            <label>
                            <input type="radio" name="source"
                                   value={x}
                                   defaultChecked={x === trainer.source}
                                   />
                                {x}</label>
                        </span>
                            ))}

                        </div>
                    </div>
                    <div className={branding.coFormGroup}>
                        <div className={branding.coFormLabel}>
                            Attended C3A Geragogy Workshop
                        </div>
                        <div className={branding.coFromControl}>
                            {['Yes', 'No'].map((x) => (
                                <span style={{marginRight: "14px"}} key={x}>
                            <label>
                            <input type="radio" name="attended"
                                   value={x}
                                    defaultChecked={x === 'Yes' && trainer.attended === 1}/>
                                {x}</label>
                        </span>
                            ))}

                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} sx={{fontSize: "28px"}}>
                    Cancel
                </Button>
                <Button onClick={confirm} autoFocus sx={{fontSize: "28px"}}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TrainerModal;