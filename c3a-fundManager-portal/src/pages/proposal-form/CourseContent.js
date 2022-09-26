import branding from '../../css/branding.module.scss';

function CourseContent(props) {
    const {answerState} = props;
    return (
        <>
            <div className={branding.coHeading}>Course Content</div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Course Objectives
                </div>
                <div className={branding.coFromControl}>
                    <textarea defaultValue={answerState.objectives} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Learning Outcomes
                </div>
                <div className={branding.coFromControl}>
                    <textarea defaultValue={answerState.learningOutcomes}/>
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Topics Covered
                </div>
                <div className={branding.coFromControl}>
                    <textarea defaultValue={answerState.topicsCovered} />
                </div>
            </div>
            <div className={branding.coFormGroup}>
                <div className={branding.coFormLabel}>
                    Training Delivery Methods
                </div>
                <div className={branding.coFromControl}>
                    <textarea defaultValue={answerState.trainingDeliveryMethods} />
                </div>
            </div>

        </>
    )
}

export default CourseContent;