import branding from '../css/branding.module.scss';
import ArticleIcon from '@mui/icons-material/Article';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

function QuickActions() {
    return (
        <div>
            <div className={branding.qaHeading}>
                Quick Actions
            </div>
            <div className={branding.qaButtonSection}>
                <button>
                    <ArticleIcon sx={{color: "white"}}/>New Proposal
                </button>
                <button>
                    <RequestQuoteIcon sx={{color: "white"}}/>New Claim
                </button>
            </div>
        </div>
    );
}

export default QuickActions;