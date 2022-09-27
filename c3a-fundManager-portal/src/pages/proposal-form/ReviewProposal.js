import {useNavigate, useParams} from "react-router-dom";
import branding from "../../css/branding.module.scss";
import CourseSummary from "./CourseSummary";
import PoweredBy from "../../components/PoweredBy";
import StyleStatusChin from "../../components/StatusChin";
import {Accordion, AccordionDetails, AccordionSummary, Rating} from "@mui/material";
import claimUtilisation from "../../assets/claim-utilisation.png";
import participationRate from "../../assets/participation-rate.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "react-select";
import {proposalRejections} from '../../data';
import PriceTextbox from "../../components/PriceTextbox";

function ReviewProposal(props) {
    const goToSuccessSubmission = props.goToSuccessSubmission;
    const {submissionState} = props;
    let navigate = useNavigate();
    return (
        <>
            <div className={branding.proposalForm}>
                <div>
                    <CourseSummary answerState={submissionState}/>
                </div>
                <PoweredBy />
            </div>
            <div className={branding.sideBox}>
                {['pendingApproval', 'pendingClarification'].includes(submissionState.status) &&
                    <div className={branding.section}>
                        <div className={branding.heading}>Actions</div>
                        <div className={branding.accordion}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content">
                                    <div className={branding.subheading}>Approve</div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{fontWeight: 'bold', marginBottom: '12px', marginTop: '24px'}}>Amount to
                                        be granted
                                    </div>
                                    <div className={branding.coFormGroup}>
                                        <div className={branding.coFromControl}>
                                            <PriceTextbox value={0} changeableValue={1}/>
                                            <span>Remaining budget: S$ 23000.00</span>
                                        </div>
                                    </div>
                                    <div style={{fontWeight: 'bold', marginBottom: '12px', marginTop: '24px'}}>Reason:
                                    </div>
                                    <textarea placeholder={'Text here will be sent to partner.'}
                                              style={{width: '100%', marginBottom: '24px', height: '150px'}}/>

                                    <button className={branding.success} onClick={() => {
                                        goToSuccessSubmission('You have approved the proposal.', 'Relevant partner will be notified through email and system notification.')
                                    }}>Approve
                                    </button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content">
                                    <div className={branding.subheading}>Reject</div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <div
                                            style={{fontWeight: 'bold', marginBottom: '12px', marginTop: '24px'}}>Reason
                                            of rejection:
                                        </div>
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            isClearable={true}
                                            isSearchable={true}
                                            name="title"
                                            options={proposalRejections.map(x => ({name: x.title, label: x.title}))}
                                        />
                                        <div style={{
                                            fontWeight: 'bold',
                                            marginBottom: '12px',
                                            marginTop: '24px'
                                        }}>Reason:
                                        </div>
                                        <textarea placeholder={'Text here will be sent to partner.'}
                                                  style={{width: '100%', marginBottom: '24px', height: '150px'}}/>
                                    </div>
                                    <button className={branding.alert} onClick={() => {
                                        goToSuccessSubmission('You have rejected the proposal.', 'Relevant partner will be notified through email and system notification.')
                                    }}>Reject
                                    </button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content">
                                    <div className={branding.subheading}>Request Clarification</div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{fontWeight: 'bold', marginBottom: '12px', marginTop: '24px'}}>Reason:
                                    </div>
                                    <textarea placeholder={'Text here will be sent to partner.'}
                                              style={{width: '100%', marginBottom: '24px', height: '150px'}}/>
                                    <button className={branding.info} onClick={() => {
                                        goToSuccessSubmission('You have requested for clarification from the partner.', 'Relevant partner will be notified through email and system notification.')
                                    }}>Request Clarification
                                    </button>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                }
                <div className={branding.section}>
                    <div className={branding.heading}>Status</div>
                    <div className={branding.content}>
                        <StyleStatusChin status={submissionState.status} bigFont={1}/>
                        {(submissionState.status === 'rejected' && submissionState.rejection) &&
                            <>
                                <div style={{marginTop: '12px'}}>
                                    <span style={{fontWeight: "bold"}}>Reason: </span>
                                    {(proposalRejections.find(x => x.id === submissionState.rejection))?.title || submissionState.rejection}
                                </div>
                                <div style={{marginTop: '12px'}}>
                                    <span style={{fontWeight: "bold"}}>Rejected date: </span>
                                    05:34pm September 24, 2020
                                </div>
                            </>

                        }
                        {(submissionState.status === 'pendingClarification' && submissionState.clarification) &&
                            <>
                                <div style={{marginTop: '12px'}}>
                                    <span style={{fontWeight: "bold"}}>Reason: </span>
                                    {submissionState.clarification}
                                </div>
                                <div style={{marginTop: '12px'}}>
                                    <span style={{fontWeight: "bold"}}>Requested clarification on: </span>
                                    05:34pm September 24, 2020
                                </div>
                            </>
                        }
                        {['approved','published'].includes(submissionState.status) &&
                            <>
                                <div style={{marginTop: '12px'}}>
                                    <span style={{fontWeight: "bold"}}>Total granted subsidy: </span>
                                    S$ 10,000.00
                                </div>
                                <div style={{marginTop: '12px'}}>
                                    <span style={{fontWeight: "bold"}}>Approval date: </span>
                                    05:34pm September 24, 2020
                                </div>
                            </>
                        }
                        <div style={{marginTop: '12px'}}>
                            <span style={{fontWeight: "bold"}}>Submission date: </span>
                            12:34pm September 23, 2020
                        </div>
                    </div>
                </div>

                <div className={branding.section}>
                    <div className={branding.heading}>Partner Scoring</div>
                    <div>
                        <div className={branding.psRow}>
                            <div className={branding.psRowTitle}>
                                Subsidy Utilisation Record
                            </div>
                            <div className={branding.psRowStar}>
                                <Rating name="read-only" value={4.25} readOnly />
                                <span style={{marginLeft: '12px'}}>4.25</span>
                            </div>
                        </div>
                        <div className={branding.psRow}>
                            <div className={branding.psRowTitle}>
                                Course Participation Rate
                            </div>
                            <div className={branding.psRowStar}>
                                <Rating name="read-only" value={3.75} readOnly />
                                <span style={{marginLeft: '12px'}}>3.75</span>
                            </div>
                        </div>
                        <div className={branding.psRow}>
                            <div className={branding.psRowTitle}>
                                Course Rating (from participants)
                            </div>
                            <div className={branding.psRowStar}>
                                <Rating name="read-only" value={3.8} readOnly />
                                <span style={{marginLeft: '12px'}}>3.8 (131 ratings)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={branding.section}>
                    <div className={branding.heading}>Overview</div>
                    <div>
                        <div className={branding.psRow}>
                            <img src={claimUtilisation}/>
                        </div>
                        <div className={branding.psRow}>
                            <img src={participationRate}/>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '24px'}}>
                    <button className={branding.stateless} onClick={() => navigate('/proposals')}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default ReviewProposal;