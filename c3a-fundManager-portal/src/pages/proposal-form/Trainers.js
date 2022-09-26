import branding from '../../css/branding.module.scss';
import {useState} from "react";
import TrainerModal from "./TrainerModal";

function Trainers(props) {
    const {answerState} = props;
    const [trainerToEdit, setTrainerToEdit] = useState({});
    const [dialogState, setDialogState] = useState(false);
    const [tempTrainers, setTempTrainers] = useState(answerState.trainers || [])
    const saveTrainers = () => {
        const latestTrainers = [];
        let hasUpdated = false;
        tempTrainers.forEach((trainer) => {
            if (trainerToEdit.id === trainer.id) {
                latestTrainers.push({
                    ...trainerToEdit
                });
                hasUpdated = true;
            } else {
                latestTrainers.push({
                    ...trainer,
                })
            }
        });
        if (!hasUpdated) {
            latestTrainers.push({
                ...trainerToEdit
            });
        }
        setTempTrainers(latestTrainers);
    }
    const editTrainer = (trainerId) => {
        if (trainerId) {
            const matched = (answerState.trainers || []).find(x => x.id === trainerId);
            setTrainerToEdit({...matched});
        } else {
            setTrainerToEdit({
                id: Date.now(),
                name: '',
                profile: '',
                attended: 1,
                source: 'In-house'
            })
        }
        setDialogState(true);
    }
    const removeTrainer = (trainerId) => {
        const newTempTrainers = [];
        tempTrainers.forEach((oldTrainer) => {
            if (oldTrainer.id !== trainerId) {
                newTempTrainers.push(oldTrainer);
            }
        });
        setTempTrainers(newTempTrainers);
    }
    return (
        <>
            <div className={branding.coHeading}>Trainers</div>
            <table className={branding.tTable}>
                <thead>
                    <tr>
                        <th style={{width: '50px', borderBottom: '2px solid black'}}>No</th>
                        <th style={{width: '350px', borderBottom: '2px solid black'}}>Name</th>
                        <th style={{width: '150px', borderBottom: '2px solid black'}}>Source</th>
                        <th style={{width: '450px', borderBottom: '2px solid black'}}>Profile</th>
                        <th style={{width: '250px', borderBottom: '2px solid black'}}>Attended C3A Geragogy Workshop</th>
                        <th style={{width: '250px', borderBottom: '2px solid black'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(tempTrainers || []).map((trainer, index) => (
                        <tr key={`adfaf${index}`}>
                            <td>{index+1}</td>
                            <td>{trainer.name}</td>
                            <td>{trainer.source}</td>
                            <td>{trainer.profile}</td>
                            <td>{trainer.attended ? 'Yes' : 'No'}</td>
                            <td>
                                <span className={branding.actionLink}
                                      onClick={() => editTrainer(trainer.id)}>Edit</span>
                                <span className={branding.actionLink}
                                      onClick={() => removeTrainer(trainer.id)}>Remove</span>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan='6'>
                            <span className={branding.actionLink} style={{fontWeight: 'bold'}} onClick={() => editTrainer(0)}>Add New Trainer</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <TrainerModal setTrainer={setTrainerToEdit}
                          saveTrainers={saveTrainers}
                          dialogState={dialogState}
                          setDialogState={setDialogState}
                          trainer={trainerToEdit}/>
        </>
    );
}

export default Trainers;