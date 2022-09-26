import InfoIcon from '@mui/icons-material/Info';
import branding from '../css/branding.module.scss';

function StaticNotification(props) {
    const alertType = ['alert', 'info', 'success', 'warning'].includes(props.type) ? props.type : 'info';
    const title = props.title || '';
    const description = props.description || '';
    const btnText = props.btnText || '';
    return (
        <>
            <div className={`${branding.staticNotification} ${branding[alertType]}`}>
                <div className={branding.icon}><InfoIcon/></div>
                <div className={branding.content}>
                    {title && <div className={branding.title}>
                        {title}
                    </div>}
                    <div>{description}</div>
                    {btnText &&
                        <button>{btnText}</button>
                    }
                </div>
            </div>
        </>
    )
}

export default StaticNotification;