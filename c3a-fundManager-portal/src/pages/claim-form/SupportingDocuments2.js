import branding from '../../css/branding.module.scss';
import sampleBrochure from '../../assets/course-brochure.pdf';

function SupportingDocuments2(props) {
    const isNew = !!props.answerState?.id;

    return (
        <>
            <div className={branding.coHeading}>Supporting Documents</div>
            <div className={branding.sdDescriptionSection}>
                Please provide the following documents in the correct format
                <ol>
                    <li>
                        <div className={branding.docTypeTitle}>List of Participants</div>
                        <div className={branding.docTypeTip}>(Download this <span className={branding.hyperlink}>Excel Template</span> to use) [.xlsx format]</div>
                    </li>
                    <li>
                        <div className={branding.docTypeTitle}>Attendances</div>
                        <div className={branding.docTypeTip}>(Download this <span className={branding.hyperlink}>Excel Template</span> to use) [.xlsx format]</div>
                    </li>
                    <li>
                        <div className={branding.docTypeTitle}>Others (if any)</div>
                        <div className={branding.docTypeTip}>[.pdf, .xlsx, .word format]</div>
                    </li>
                </ol>
                <button className={branding.uploadBtn}>Upload Document</button>
                {isNew && <>
                    <div className={branding.docTypeTitle} style={{marginTop: '48px'}}>Uploaded Documents</div>
                    <div>
                        <ol>
                            <li>
                                <div className={branding.file}>
                                    <div className={branding.fileName}>
                                        <a href={sampleBrochure} target="_blank" >courseA-participants.xlsx</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={branding.file}>
                                    <div className={branding.fileName}>
                                        <a href={sampleBrochure} target="_blank" >courseA-attendance.xlsx</a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </>}
            </div>
        </>
    )
}

export default SupportingDocuments2;