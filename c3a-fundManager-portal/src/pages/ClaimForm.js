import {useParams} from "react-router-dom";
import branding from "../css/branding.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {claims as tempClaims} from '../data';
import SuccessSubmission from "./proposal-form/SuccessSubmission";
import ReviewClaim from "./claim-form/ReviewClaim";

function ClaimForm() {
    const params = useParams();
    let claims = Object.assign([], tempClaims);
    const [pageTitle, setPageTitle] = useState('');
    const [pageDesc, setPageDesc] = useState('');

    // define default submission data
    let tempSubmission = {};
    if (params.claimId) {
        tempSubmission = claims.find(x => x.id === params.claimId);
    }
    const [submissionState, setSubmission] = useState(tempSubmission);
    const [activeStep, setActiveStep] = useState(0);

    const goToSuccessSubmission = (title, description) => {
        setActiveStep(1);
        setPageTitle(title);
        setPageDesc(description);
    }

    return (
        <div className={branding.newProposalPage}>
            <div className={`${branding.bodyContainer} ${branding.greyBg}`}>
                <div className={branding.backLink}>
                    <Link to="/claims">{`< Claim`}</Link>
                </div>
                <div className={branding.pageBodyContainer}>
                    {activeStep === 0 &&
                        <ReviewClaim submissionState={submissionState} goToSuccessSubmission={goToSuccessSubmission}/>
                    }
                    {activeStep === 1 &&
                        <SuccessSubmission title={pageTitle} description={pageDesc} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ClaimForm;