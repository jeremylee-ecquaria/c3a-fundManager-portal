import branding from "../css/branding.module.scss";
import {Container} from "@mui/material";

function ImportantNotice() {
    return (
        <div className={branding.slideshowBg}>
            <Container maxWidth="lg">
                <div className={branding.slideshowContainer}>
                    <div className={branding.heading}>Important Notice</div>
                    <div className={branding.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales mi sit amet augue tempus, nec varius sem posuere. Nullam condimentum lectus arcu, et tincidunt ex consectetur ut. Mauris non sapien nulla. Proin tincidunt, velit auctor finibus accumsan, enim nunc facilisis risus, a cursus ante velit eu est. Etiam fermentum nisi ut eros tempor, at porttitor massa euismod. Nulla volutpat odio sit amet tortor sagittis tempor.
                    </div>
                    <div className={branding.footer}>Posted on 10/09/2022</div>
                </div>
            </Container>
        </div>
    );
}

export default ImportantNotice;