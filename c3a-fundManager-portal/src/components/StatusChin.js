import branding from '../css/branding.module.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import CircleIcon from '@mui/icons-material/Circle';
import ModeIcon from '@mui/icons-material/Mode';

function StyleStatusChin(props) {
    const status = props.status;
    const bigFont = props.bigFont;
    switch (status) {
        case 'draft': {
            return (
                <span className={`${branding.pending} ${branding.statusChin} ${bigFont ? branding.bigFont : ''}`}><ModeIcon /> Draft</span>
            );
        }
        case 'pendingApproval': {
            return (
                <span className={`${branding.info} ${branding.statusChin} ${bigFont ? branding.bigFont : ''}`}><CircleIcon /> Pending Approval</span>
            );
        }
        case 'pendingClarification': {
            return (
                <span className={`${branding.info} ${branding.statusChin} ${bigFont ? branding.bigFont : ''}`}><ErrorIcon /> Pending Clarification</span>
            );
        }
        case 'approved': {
            return (
                <span className={`${branding.success} ${branding.statusChin} ${bigFont ? branding.bigFont : ''}`}><DoneIcon /> Approved</span>
            );
        }
        case 'rejected': {
            return (
                <span className={`${branding.alert} ${branding.statusChin} ${bigFont ? branding.bigFont : ''}`}><CloseIcon /> Rejected</span>
            );
        }
        case 'published': {
            return (
                <span className={`${branding.success} ${branding.statusChin} ${bigFont ? branding.bigFont : ''}`}><DoneAllIcon /> Published</span>
            );
        }
        default:
    }
}

export default StyleStatusChin;