import branding from '../../css/branding.module.scss';
import sampleBrochure from '../../assets/course-brochure.pdf';
import sampleZipFolder from '../../assets/trainers-cv.zip';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {formatPrice} from "../../helpers";
import {fieldToTitle} from '../../data';
import StaticNotification from "../../components/StaticNotification";

function CourseSummary(props) {
    const {answerState} = props;
    return (
        <>
            <div className={branding.courseSummaryPage}>
                <div className={branding.coHeading}>Summary</div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 1: Course Overview</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.title}</div>
                            <div className={branding.fieldValue}>{answerState.title}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.courseCode}</div>
                            <div className={branding.fieldValue}>{answerState.courseCode}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.organisationName}</div>
                            <div className={branding.fieldValue}>{answerState.organisationName}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.type}</div>
                            <div className={branding.fieldValue}>{answerState.type}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.category}</div>
                            <div className={branding.fieldValue}>{answerState.category}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.format}</div>
                            <div className={branding.fieldValue}>{answerState.format}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.totalDuration}</div>
                            <div className={branding.fieldValue}>{answerState.totalDuration}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.totalSessions}</div>
                            <div className={branding.fieldValue}>{answerState.totalSessions}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.skillsFutureEligible}</div>
                            <div className={branding.fieldValue}>{answerState.skillsFutureEligible ? 'Yes' : 'No'}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.fullCourseFee}</div>
                            <div className={branding.fieldValue}>{formatPrice(answerState.fullCourseFee)}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.GSTOfFullCourseFee}</div>
                            <div className={branding.fieldValue}>{formatPrice(answerState.GSTOfFullCourseFee)}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.remark}</div>
                            <div className={branding.fieldValue}>{answerState.remark}</div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 2: Course Content</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.objectives}</div>
                            <div className={branding.fieldValue}>{answerState.objectives}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.learningOutcomes}</div>
                            <div className={branding.fieldValue}>{answerState.learningOutcomes}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.topicsCovered}</div>
                            <div className={branding.fieldValue}>{answerState.topicsCovered}</div>
                        </div>
                        <div className={branding.fieldRow}>
                            <div className={branding.fieldTitle}>{fieldToTitle.trainingDeliveryMethods}</div>
                            <div className={branding.fieldValue}>{answerState.trainingDeliveryMethods}</div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 3: Trainers</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldGroup}>
                            {answerState.trainers?.map((trainer, index) => (
                                <>
                                    <div className={branding.fieldGroupTitle}>{index+1}. {trainer.name}</div>
                                    <div className={branding.fieldRow}>
                                        <div className={branding.fieldTitle}>{fieldToTitle.trainer.profile}</div>
                                        <div className={branding.fieldValue}>{trainer.profile}</div>
                                    </div>
                                    <div className={branding.fieldRow}>
                                        <div className={branding.fieldTitle}>{fieldToTitle.trainer.source}</div>
                                        <div className={branding.fieldValue}>{trainer.source}</div>
                                    </div>
                                    <div className={branding.fieldRow}>
                                        <div className={branding.fieldTitle}>{fieldToTitle.trainer.attended}</div>
                                        <div className={branding.fieldValue}>{trainer.attended ? 'Yes' : 'No'}</div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 4: Cost Breakdown</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldSection}>
                            <div className={branding.fieldRow}>
                                <div className={branding.fieldTitle}>{fieldToTitle.maxClassSize}</div>
                                <div className={branding.fieldValue}>{answerState.maxClassSize}</div>
                            </div>

                            <div className={branding.fieldSectionTitle}>{fieldToTitle.partA}</div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.trainerSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.trainerNo}</div>
                                    <div className={branding.fieldValue}>{answerState.trainerNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.trainerUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.trainerUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.trainerHours}</div>
                                    <div className={branding.fieldValue}>{answerState.trainerHours}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.trainerTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.trainerTotal)}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.facilitatorSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.facilitatorNo}</div>
                                    <div className={branding.fieldValue}>{answerState.facilitatorNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.facilitatorUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.facilitatorUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.facilitatorHours}</div>
                                    <div className={branding.fieldValue}>{answerState.facilitatorHours}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.facilitatorTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.facilitatorTotal)}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.manpowerSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.manpowerNo}</div>
                                    <div className={branding.fieldValue}>{answerState.manpowerNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.manpowerUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.manpowerUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.manpowerHours}</div>
                                    <div className={branding.fieldValue}>{answerState.manpowerHours}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.manpowerTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.manpowerTotal)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.manpowerRemark || '-'}</div>
                                    <div className={branding.fieldValue}>{answerState.manpowerRemark || '-'}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.venueSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.venueNo}</div>
                                    <div className={branding.fieldValue}>{answerState.venueNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.venueUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.venueUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.venueHours}</div>
                                    <div className={branding.fieldValue}>{answerState.venueHours}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.venueTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.venueTotal)}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.publicitySection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.publicityUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.publicityUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.publicityTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.publicityTotal)}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.logisticSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.logisticUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.logisticUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.logisticTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.logisticTotal)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.logisticRemark || '-'}</div>
                                    <div className={branding.fieldValue}>{answerState.logisticRemark || '-'}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.transportSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.transportUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.transportUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.transportTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.transportTotal)}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.othersSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.othersNo}</div>
                                    <div className={branding.fieldValue}>{answerState.othersNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.othersUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.othersUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.othersHours}</div>
                                    <div className={branding.fieldValue}>{answerState.othersHours}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.othersTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.othersTotal)}</div>
                                </div>
                            </div>

                            <div className={branding.fieldSectionTitle}>{fieldToTitle.partB}</div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.courseSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.ccNo}</div>
                                    <div className={branding.fieldValue}>{answerState.ccNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.ccUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.ccUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.ccTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.ccTotal)}</div>
                                </div>
                            </div>
                            <div className={branding.fieldGroup}>
                                <div className={branding.fieldGroupTitle}>{fieldToTitle.trainingEqSection}</div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.ccNo}</div>
                                    <div className={branding.fieldValue}>{answerState.ccNo}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.ccUnitCost}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.ccUnitCost)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.ccTotal}</div>
                                    <div className={branding.fieldValue}>{formatPrice(answerState.ccTotal)}</div>
                                </div>
                                <div className={branding.fieldRow}>
                                    <div className={branding.fieldTitle}>{fieldToTitle.logisticRemark || '-'}</div>
                                    <div className={branding.fieldValue}>{answerState.logisticRemark || '-'}</div>
                                </div>
                            </div>
                         </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <div className={branding.csSectionHeading}>Step 5: Supporting Documents</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={branding.fieldGroup}>
                            <div className={branding.fieldRow}>
                                <div className={branding.fieldTitle}>1.</div>
                                <div className={branding.fieldValue}>
                                    <a href={sampleBrochure} target="_blank" >techComp-course-brochure.pdf</a>
                                </div>
                            </div>
                            <div className={branding.fieldRow}>
                                <div className={branding.fieldTitle}>2.</div>
                                <div className={branding.fieldValue}>
                                     <a href={sampleZipFolder} target="_blank" >trainers-cv.zip</a>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default CourseSummary;