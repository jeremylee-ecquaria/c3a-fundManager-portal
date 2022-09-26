import branding from '../../css/branding.module.scss';
import sampleBrochure from '../../assets/course-brochure.pdf';
import sampleZipFolder from '../../assets/trainers-cv.zip';

function SupportingDocuments(props) {
    const isNew = !!props.answerState?.courseCode;

    return (
        <>
            <div className={branding.coHeading}>Supporting Documents</div>
            <div className={branding.sdDescriptionSection}>
                Please provide the following documents in the correct format
                <ol>
                    <li>
                        <div className={branding.docTypeTitle}>Trainers' CV</div>
                        <div className={branding.docTypeTip}>(Compress all CV pdf files in a zip folder) [.zip format]</div>
                    </li>
                    <li>
                        <div className={branding.docTypeTitle}>Other supporting documents</div>
                        <div className={branding.docTypeTip}>Eg. course brochure, etc [.pdf, .xlsx, .word format]</div>
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
                                        <a href={sampleBrochure} target="_blank" >techComp-course-brochure.pdf</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={branding.file}>
                                    <div className={branding.fileName}>
                                        <a href={sampleZipFolder} target="_blank" >trainers-cv.zip</a>
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

export default SupportingDocuments;