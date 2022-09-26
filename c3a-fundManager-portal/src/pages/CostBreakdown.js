import branding from '../css/branding.module.scss';
import PriceTextbox from "../components/PriceTextbox";
import {Accordion, AccordionDetails, AccordionSummary, Tooltip} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

function CostBreakdown(props) {
    const {answerState} = props;
    const updateAnswer = props.onUpdateAnswer;
    return (
        <>
            <div className={branding.coHeading}>Cost Breakdown</div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Maximum Class Size
                </div>
                <div className={branding.coFromControl}>
                    <input type="number"
                           value={answerState.maxClassSize}
                           style={{width: '250px'}}
                           onChange={(event) => updateAnswer('maxClassSize', event.target.value)}/>
                </div>
            </div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content">
                    <div className={branding.costSectionHeading}>Part A: Variable Costs</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Trainer</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.trainerNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.trainerUnitCost} field='trainerUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Hours
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.trainerHours} field='trainerHours' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.trainerTotal} field='trainerTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Assistant Trainer/Facilitator</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.facilitatorNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.facilitatorUnitCost} field='facilitatorUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Hours
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.facilitatorHours} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.facilitatorTotal} field='facilitatorTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Additional Manpower (if any)</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.manpowerNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.manpowerUnitCost} field='manpowerUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Hours
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.manpowerHours} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.manpowerTotal} field='manpowerTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Please elaborate
                            </div>
                            <div className={branding.coFromControl}>
                                <textarea value={answerState.manpowerRemark} onChange={(event) => updateAnswer('manpowerRemark', event.target.value)}/>
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Venue Rental (inclusive of eletricity, Maintenance and Wifi)</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.venueNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.venueUnitCost} field='venueUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Hours
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.venueHours} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.venueTotal} field='venueTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Publicity and Marketing</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.publicityUnitCost} field='publicityUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.publicityTotal} field='publicityTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Logistic Costs (inclusive of all activity items and teaching material, if any)</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.logisticUnitCost} field='logisticUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.logisticTotal} field='logisticTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Please elaborate
                            </div>
                            <div className={branding.coFromControl}>
                                <textarea value={answerState.logisticRemark} onChange={(event) => updateAnswer('logisticRemark', event.target.value)}/>
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Transport Costs</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.transportUnitCost} field='transportUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.transportTotal} field='transportTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>Others (if any)</div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.othersNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.othersUnitCost} field='othersUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Hours
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.othersHours} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.othersTotal} field='othersTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Please elaborate
                            </div>
                            <div className={branding.coFromControl}>
                                <textarea value={answerState.othersRemark} onChange={(event) => updateAnswer('othersRemark', event.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className={branding.costSectionTotal}>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel} style={{width: '220px', fontWeight: 'bold'}}>
                                Part A Subtotal
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox
                                    type="number"
                                    value={answerState.partATotal}
                                    field='partATotal'
                                    width='250px'
                                    disabled={true}/>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content">
                    <div className={branding.costSectionHeading}>Part B: Fixed Costs</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>
                            Course Curriculum Development
                            <Tooltip title={<span style={{fontSize: '28px'}}>eg. Cost of development: $5000. Estimated # of runs : 20 runs over 2 years). Unit cost for course curriculum dev: $250 ($5000/20=$250).</span>}>
                                <InfoIcon />
                            </Tooltip>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.ccNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.ccUnitCost} field='ccUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.ccTotal} field='ccTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                        <hr style={{width: "50%", border: "2px solid #7e7e7e"}}/>
                    </div>
                    <div className={branding.costSubSection}>
                        <div className={branding.costSectionSubheading}>
                            Training Equipment (Fixed Assets including hardwares, iPads, laptops, AED, etc.)
                            <Tooltip title={<span style={{fontSize: '28px'}}>Applicable only if new equipment needs to be acquired specially for the course.</span>}>
                                <InfoIcon />
                            </Tooltip>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                No of Units
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.equipmentNo} />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Unit Cost
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.equipmentUnitCost} field='equipmentUnitCost' width='250px'/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Total Costs
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.equipmentTotal} field='equipmentTotal' width='250px' disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className={branding.costSectionTotal}>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel} style={{width: '220px', fontWeight: 'bold'}}>
                                Part B Subtotal
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.partBTotal} field='partBTotal' width='250px' disabled={true}  disabled={true}/>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content">
                    <div className={branding.costSectionHeading}>Summary</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={branding.costSubSection}>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Grand Total (Part A + Part B)
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.total} field='total' width='250px' disabled={true}/>
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Projected number of learning places run
                            </div>
                            <div className={branding.coFromControl}>
                                <input type="text"  style={{width: '300px'}} defaultValue={answerState.places} field='places' width='250px' />
                            </div>
                        </div>
                        <div className={branding.coFormGroup}>
                            <div className={branding.coFormLabel}>
                                Full course per pax
                            </div>
                            <div className={branding.coFromControl}>
                                <PriceTextbox value={answerState.fullCoursePerPax} field='fullCoursePerPax' width='250px' disabled={true} />
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default CostBreakdown;