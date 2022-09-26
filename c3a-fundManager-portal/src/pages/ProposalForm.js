import {useParams} from "react-router-dom";
import branding from "../css/branding.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {proposals as tempProposals, proposalRejections} from '../data';
import SuccessSubmission from "./proposal-form/SuccessSubmission";
import ReviewProposal from "./proposal-form/ReviewProposal";

function ProposalForm() {
    const params = useParams();
    let proposals = Object.assign([], tempProposals);
    const [pageTitle, setPageTitle] = useState('');
    const [pageDesc, setPageDesc] = useState('');

    // define default submission data
    let tempSubmission = {};
    if (params.courseCode) {
        tempSubmission = proposals.find(x => x.courseCode === params.courseCode);
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
                        <Link to="/proposals">{`< Proposal`}</Link>
                    </div>
                    <div className={branding.pageBodyContainer}>
                        {activeStep === 0 &&
                            <ReviewProposal submissionState={submissionState} goToSuccessSubmission={goToSuccessSubmission}/>
                        }
                        {activeStep === 1 &&
                            <SuccessSubmission title={pageTitle} description={pageDesc} />
                        }
                    </div>
                </div>
            </div>
        );
}

export default ProposalForm;