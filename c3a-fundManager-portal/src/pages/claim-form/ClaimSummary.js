import branding from '../../css/branding.module.scss';
import sampleBrochure from '../../assets/course-brochure.pdf';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {formatPrice} from "../../helpers";
import {claimFieldToTile} from '../../data';
import StaticNotification from "../../components/StaticNotification";

function ClaimSummary(props) {
    const {answerState} = props;
    return (
        <>
            <div className={branding.courseSummaryPage}>
                <div className={branding.coHeading}>Summary</div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 1: Course Detail</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.organisationName}</div>
                            <div className={branding.fieldValue}>{answerState.organisationName}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.title}</div>
                            <div className={branding.fieldValue}>{answerState.title}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.startDate}</div>
                            <div className={branding.fieldValue}>{answerState.startDate}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.endDate}</div>
                            <div className={branding.fieldValue}>{answerState.endDate}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.fullCourseFee}</div>
                            <div className={branding.fieldValue}>{formatPrice(answerState.fullCourseFee)}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.subsidy.perPax}</div>
                            <div className={branding.fieldValue}>{formatPrice(answerState.subsidy?.perPax || 0)}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.totalSeniors}</div>
                            <div className={branding.fieldValue}>{answerState.totalSeniors}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.amountToClaim}</div>
                            <div className={branding.fieldValue}>{formatPrice(answerState.amountToClaim)}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.invoiceFormNo}</div>
                            <div className={branding.fieldValue}>{answerState.invoiceFormNo}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{claimFieldToTile.invoiceFormDate}</div>
                            <div className={branding.fieldValue}>{answerState.invoiceFormDate}</div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 2: Supporting Documents</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldGroup}>
                            <div className={branding.fieldRow}>
                                <div className={branding.fieldTitle}>1.</div>
                                <div className={branding.fieldValue}>
                                    <a href={sampleBrochure} target="_blank" >courseA-participants.xlsx</a>
                                </div>
                            </div>
                            <div className={branding.fieldRow}>
                                <div className={branding.fieldTitle}>2.</div>
                                <div className={branding.fieldValue}>
                                    <a href={sampleBrochure} target="_blank" >courseA-attendance.xlsx</a>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default ClaimSummary;