import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Header from "../components/Header";
import branding from "../css/branding.module.scss";
import { Outlet } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';

function Main() {
    return (
        <>
            <div className={branding.mainPage}>
                <div className={branding.headerContainer}>
                    <Header />
                </div>
                <div className={branding.bodyCotainer}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Main;
