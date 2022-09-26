import {Grid} from "@mui/material";

function PoweredBy() {
    return (
        <div style={{position: "absolute", width: "100%"}}>
            <Grid container style={{color: "darkgrey", fontSize: "16px", alignItems: "center", justifyContent: "center"}}>
                <Grid>
                    Powered by <a style={{textDecoration: "underline", color: "darkgrey"}} href="https://toppanecquaria.com/products/ecquaria-government-platform/">Ecquaria Government Platform</a>
                </Grid>
            </Grid>
        </div>
);
}

export default PoweredBy;