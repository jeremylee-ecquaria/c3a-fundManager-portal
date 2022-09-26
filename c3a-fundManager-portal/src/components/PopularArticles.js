import branding from "../css/branding.module.scss";
import MenuBookIcon from '@mui/icons-material/MenuBook';

function PopularArticles() {
    return (
        <div>
            <div className={branding.paHeading}>
                Popular Articles
            </div>
            <div className={branding.paListSection}>
                <div className={branding.article}>
                    <MenuBookIcon />The process flow of submitting new proposal.
                </div>
                <div className={branding.article}>
                    <MenuBookIcon />Get ready the supporting documents.
                </div>
                <div className={branding.article}>
                    <MenuBookIcon />What can you do if your proposal is rejected.
                </div>
            </div>
            <div className={branding.exploreLink}>
                Explore More
            </div>
        </div>
    );
}

export default PopularArticles;