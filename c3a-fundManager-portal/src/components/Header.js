import branding from "../css/branding.module.scss";
import logo from '../assets/c3a-nsa-logo-color.png';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import profileAvatar from '../assets/profile-avatar.jpg';
import {useNavigate, useLocation} from "react-router-dom";

const navItems = [
    {
        title: 'Proposals',
        path: '/proposals',
    }, {
        title: 'Claims',
        path: '/claims'
    }
];

function Header() {
    const location = useLocation();
    const  navigate = useNavigate();
    const [activeNav, setActiveNav] = useState(location.pathname);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (path) => {
        setAnchorEl(null);
        if (path) navigate(path);
    };

    const navigateTo = (path) => {
        setActiveNav(path);
        if (path) navigate(path);
    };

    return (
      <div className={branding.header}>
          <div>
            <img className={branding.companyLogo} src={logo} onClick={() => navigateTo('/home')}/>
          </div>
          <div>
              {/*Proposals, Claims*/}
              {navItems.map((navItem) => (
                  <div className={branding.navItem}
                       onClick={() => navigateTo(navItem.path)}
                       key={navItem.path}>
                      <div className={`${activeNav === navItem.path && branding.activeNav}`}>
                          {navItem.title}
                      </div>
                  </div>
              ))}
              {/*Inbox icon*/}
              <div className={branding.navItem}>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="error">
                          <MailIcon />
                      </Badge>
                  </IconButton>
              </div>
              {/*user name and pic*/}
              <div className={branding.navItem}>
                  <div className={branding.profileNavItem}>
                      <div style={{marginRight: "14px"}}>Brandon Goh</div>
                      <div>
                          <Tooltip title="Open settings">
                              <IconButton onClick={handleClick} sx={{ p: 0 }}>
                                  <Avatar alt="Remy Sharp" src={profileAvatar} />
                              </IconButton>
                          </Tooltip>
                          <IconButton size="large"
                                      color="inherit"
                                      id="demo-positioned-button"
                                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                                      aria-haspopup="true"
                                      aria-expanded={open ? 'true' : undefined}
                                      onClick={handleClick}>
                              <KeyboardArrowDownIcon />
                          </IconButton>
                          <Menu
                              id="demo-positioned-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'left',
                              }}
                              transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'left',
                              }}
                          >
                              <MenuItem onClick={handleClose} sx={{fontSize: "20px", padding:"20px 40px"}}>
                                  Profile
                              </MenuItem>
                              <MenuItem onClick={() => handleClose('/login')} sx={{fontSize: "20px", padding:"20px 40px"}}>
                                  Logout
                              </MenuItem>
                          </Menu>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Header;