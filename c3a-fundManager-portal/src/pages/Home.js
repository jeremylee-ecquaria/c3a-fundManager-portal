import branding from '../css/branding.module.scss';
import chart1 from '../assets/pending-cases.png';
import claimUtilisation from '../assets/claim-usage.png';
import claimCount from '../assets/claim-count.png';
import PoweredBy from "../components/PoweredBy";
import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    return (
        <>
            <div className={`${branding.bodyContainer} ${branding.greyBg}`}>
                <div className={branding.chartContainer}>
                    <div className={branding.heading}>Proposals Overview</div>
                    <div className={branding.content}>
                        <img src={chart1} className={branding.chart} onClick={() => window.open('https://demo.ambience.cloud/dashboard/917fce60-8ce5-4c6a-a650-1d045c7ba9e2/index.html', '_blank')}/>
                        <div className={branding.qaButtonSection}>
                            <button onClick={() => navigate('/proposals?status=pending')}>Review Proposals</button>
                        </div>
                    </div>
                </div>
                <div className={branding.chartContainer}>
                    <div className={branding.heading}>Claims Overview</div>
                    <div className={branding.content}>
                        <img src={claimUtilisation} className={branding.chart} onClick={() => window.open('https://demo.ambience.cloud/dashboard/917fce60-8ce5-4c6a-a650-1d045c7ba9e2/index.html', '_blank')}/>
                        <img src={claimCount} className={branding.chart} onClick={() => window.open('https://demo.ambience.cloud/dashboard/917fce60-8ce5-4c6a-a650-1d045c7ba9e2/index.html', '_blank')}/>
                        <div className={branding.qaButtonSection}>
                            <button onClick={() => navigate('/claims?status=pending')}>Review Claims</button>
                        </div>
                    </div>
                </div>
                <div style={{position: "relative"}}><PoweredBy /></div>
            </div>
        </>
    )
}

export default Home;