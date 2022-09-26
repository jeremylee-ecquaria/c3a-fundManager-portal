import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import branding from '../../css/branding.module.scss';

function SuccessSubmission(props) {
    const {title, description} = props;
    return (
        <>
            <div className={branding.ssPage}>
                <div className={branding.title}>
                    <CheckCircleIcon />
                    {title}
                </div>
                <div className={branding.description}>
                    {description}
                </div>
            </div>
        </>
    )
}

export default SuccessSubmission;