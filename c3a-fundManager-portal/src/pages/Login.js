import logo from '../assets/c3a-nsa-logo-color.png';
import banner from '../assets/fm-banner.jpg';
import branding from '../css/branding.module.scss'
import {Button, Grid, TextField, Item} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PoweredBy from '../components/PoweredBy'

function Login() {
    let navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path);
    }
    return (
        <Grid container sx={{height: '100vh'}}>
            <Grid item xs={6}>
                <div style={{height: "95%"}}>
                    <Grid container alignItems="center" justifyContent="center"  sx={{position: "relative", height: "100%", width: "100%"}}>

                        <Grid>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className={`${branding.heading} ${branding.fontPrimaryColor} ${branding.bold}`}
                                 style={{marginBottom: "48px"}}>
                                Fund Manager Portal
                            </div>
                            <Grid flexDirection="column" sx={{maxWidth: "500px"}}>
                                <div style={{marginBottom: "24px"}}>
                                    <TextField label="Email" type="email" placeholder="@gmail.com" sx={{width: "500px", fontSize: "21px"}}/>
                                </div>
                                <div style={{marginBottom: "36px"}}>
                                    <TextField label="Password" type="password" placeholder="******" sx={{width: "500px", fontSize: "21px"}}/>
                                </div>
                                <div style={{marginBottom: "24px"}}>
                                    <Button onClick={() => routeChange('/home')} variant="contained" sx={{width: "524px", backgroundColor: "#7b1fa2", fontSize: "21px"}}>Sign In</Button>
                                </div>
                                <div className={`${branding.description} ${branding.fontPrimaryColor} ${branding.bold}`}>
                                    Forgot password?
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{height: "5%", position: "relative"}}>
                    <PoweredBy />
                </div>

            </Grid>
            <Grid item xs={6} sx={{display: { xs: "none", md: "block" }}}>
                <img src={banner} style={{width: '100%', height: '100%'}} />
            </Grid>
        </Grid>
    );
}

export default Login;