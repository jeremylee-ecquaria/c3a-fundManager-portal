import PriceTextbox from "../../components/PriceTextbox";
import branding from '../../css/branding.module.scss';
import { proposals, claimFieldToTile } from "../../data";
import React, {useState} from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import {formatPrice} from "../../helpers";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StaticNotification from "../../components/StaticNotification";

function CourseDetail(props) {
    const {answerState} = props;
    const [selectedCourseTitle, setSelectedCourseTitle] = useState();
    const [fullCourseFee, setFullCourseFee] = useState(answerState.fullCourseFee);
    const [subsidyPerPax, setSubsidyPerPax] = useState(answerState.subsidy.perPax);
    const [subsidyToClaim, setSubsidyToClaim] = useState(answerState.amountToClaim);
    const [totalSeniors, setTotalSeniors] = useState(answerState.totalSeniors || 0);
    const courseTitle = proposals.filter(x => x.organisationName === 'Test Company').map(x => x.title);
    const courseOptions = courseTitle.map(title => ({
        value: title,
        label: title,
    }))
    const reselectCourseTitle = (courseTitle) => {
        const matched = proposals.find(x => x.title === courseTitle);
        if (matched) {
            setFullCourseFee(matched.fullCourseFee);
            setSubsidyPerPax(matched.subsidyPerPax);
            setSubsidyToClaim(totalSeniors * matched.subsidyPerPax);
            setSelectedCourseTitle(courseTitle);
        } else {
            setFullCourseFee(0);
            setSubsidyPerPax(0);
            setSelectedCourseTitle('');
        }
    };
    const changeTotalSeniors = (event) => {
        setTotalSeniors(event.target.value);
        console.log('event.target.value=>', event.target.value)
        setSubsidyToClaim(event.target.value * subsidyPerPax);
    };

    return (
        <>
            <div className={branding.coHeading}>Course Detail</div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Organisation Name
                </div>
                <div className={branding.coFromControl}>
                    <input type="text" defaultValue={answerState.organisationName} disabled={true}/>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.title}
                </div>
                <div className={branding.coFromControl}>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={courseOptions.find(x => x.value === answerState.title) || courseOptions[0].value}
                        isClearable={true}
                        isSearchable={true}
                        name="title"
                        options={courseOptions}
                        onChange={(event) => reselectCourseTitle(event.value)}
                    />
                    {selectedCourseTitle === 'Course B' &&
                        <div style={{color: "orange", marginTop: "12px", fontWeight: "bold"}}>! Low claimable amount level</div>
                    }
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.startDate}
                </div>
                <div className={branding.coFromControl}>
                    <DatePicker selected={new Date()} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.endDate}
                </div>
                <div className={branding.coFromControl}>
                    <DatePicker selected={new Date()} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.fullCourseFee}
                </div>
                <div className={branding.coFromControl}>
                    <PriceTextbox value={fullCourseFee} width='250px' changeableValue={true}
                    disabled={true}/>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.subsidy.perPax}
                </div>
                <div className={branding.coFromControl}>
                    <PriceTextbox value={subsidyPerPax} width='250px' changeableValue={true}
                                  disabled={true}/>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.totalSeniors}
                </div>
                <div className={branding.coFromControl}>
                    <input type="number" value={totalSeniors} onChange={changeTotalSeniors}/>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.amountToClaim}
                </div>
                <div className={branding.coFromControl}>
                    <PriceTextbox value={subsidyToClaim} width='250px' disabled={true} changeableValue={true}/>
                    <div style={{marginTop: '12px'}}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content">
                                <div style={{fontWeight: 'bold', fontSize: '28px'}}>Claim Utilisation</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {selectedCourseTitle === 'Course B' ?
                                    <>
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{fontWeight: 'bold'}}>Total Granted Claim:</span> {formatPrice(20000)}
                                        </div>
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{fontWeight: 'bold'}}>Used Claim:</span> {formatPrice(19300)}
                                            <span style={{fontStyle: 'italic', fontSize: '18px', marginLeft: '8px'}}>(excluding the new claim amount)</span>
                                        </div>
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{fontWeight: 'bold'}}>Remaining Claimable Amount:</span> {formatPrice(20000 - 19300)}
                                        </div>
                                        <StaticNotification type='warning'
                                                            title='You have reached a low claimable amount level'
                                                            description='You only left less than 10% of your total granted subsidy. If you wish to request more subsidy for this course, please click the button below. '
                                                            btnText='Apply For More Subsidy' />
                                    </>
                                    :
                                    <>
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{fontWeight: 'bold'}}>Total Granted Claim:</span> {formatPrice(50000)}
                                        </div>
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{fontWeight: 'bold'}}>Used Claim:</span> {formatPrice(800)}
                                            <span style={{fontStyle: 'italic', fontSize: '18px', marginLeft: '8px'}}>(excluding the new claim amount)</span>
                                        </div>
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{fontWeight: 'bold'}}>Remaining Claimable Amount:</span> {formatPrice(50000 - 800)}
                                        </div>
                                    </>
                                }
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.invoiceFormNo}
                </div>
                <div className={branding.coFromControl}>
                    <input type="text" defaultValue={answerState.invoiceFormNo} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    {claimFieldToTile.invoiceFormDate}
                </div>
                <div className={branding.coFromControl}>
                    <DatePicker selected={new Date()} />
                </div>
            </div>
        </>
    )
}

export default CourseDetail;