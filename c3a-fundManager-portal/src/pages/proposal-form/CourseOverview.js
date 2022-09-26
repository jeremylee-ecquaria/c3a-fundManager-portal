import PriceTextbox from "../../components/PriceTextbox";
import branding from '../../css/branding.module.scss';

function CourseOverview(props) {
    const {answerState, isNew} = props;
    return (
        <>
            <div className={branding.coHeading}>Course Overview</div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Title
                </div>
                <div className={branding.coFromControl}>
                    <input type="text" defaultValue={answerState.title} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Organisation Name
                </div>
                <div className={branding.coFromControl}>
                    <input type="text" defaultValue={answerState.organisationName} disabled={isNew}/>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Type
                </div>
                <div className={branding.coFromControl}>
                    {['Bite-Sized Courses', 'Short Courses', 'Exam Free Courses', 'Intergenerational Learning Programme'].map((x) => (
                        <span style={{marginRight: "14px"}} key={x}>
                            <label>
                            <input type="radio" name="type"
                                   value={x}
                                    defaultChecked={x === answerState.type}/>
                                {x}</label>
                        </span>
                    ))}

                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Category
                </div>
                <div className={branding.coFromControl}>
                    {["Ageing & Life Skills", "Finance & Business", "Health & Wellness", "Humanities", "IT & Science", "Media, Arts & Design"].map((x) => (
                        <span style={{marginRight: "14px"}} key={x}>
                            <label>
                            <input type="radio" name="category"
                                   value={x}
                                   defaultChecked={x === answerState.category}/>
                                {x}</label>
                        </span>
                    ))}

                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Format
                </div>
                <div className={branding.coFromControl}>
                    {["F2F only", 'F2F/Online', 'Blended'].map((x) => (
                        <span style={{marginRight: "14px"}} key={x}>
                            <label>
                            <input type="radio" name="format"
                                   value={x}
                                   defaultChecked={x === answerState.format} />
                                {x}</label>
                        </span>
                    ))}

                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Description
                </div>
                <div className={branding.coFromControl}>
                    <textarea defaultValue={answerState.description} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Total Duration (in hour)
                </div>
                <div className={branding.coFromControl}>
                    <input type="number" defaultValue={answerState.totalDuration} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Total Number of Sessions
                </div>
                <div className={branding.coFromControl}>
                    <input type="number" defaultValue={answerState.totalSessions} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    SkillsFuture Credit Eligible
                </div>
                <div className={branding.coFromControl}>
                    <input type="checkbox"
                           value={answerState.skillsFutureEligible}
                           defaultChecked={answerState.skillsFutureEligible}
                    />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Full Course Fee Per Pax (before subsidy)
                </div>
                <div className={branding.coFromControl}>
                    <input type="number" defaultValue={answerState.fullCourseFee} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    GST of Full Course Fee Per Pax
                </div>
                <div className={branding.coFromControl}>
                    <PriceTextbox type="number" value={answerState.GSTOfFullCourseFee} field='GSTOfFullCourseFee' />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Remark
                </div>
                <div className={branding.coFromControl}>
                    <textarea defaultValue={answerState.remark} />
                </div>
            </div>
        </>
    )
}

export default CourseOverview;