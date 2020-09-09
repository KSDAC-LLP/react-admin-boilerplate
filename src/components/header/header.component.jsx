import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { MenuItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

import { createStructuredSelector } from "reselect";
import "./header.style.scss";
import { selectActiveUser } from "../../store/user/user.selectors";
import { logout } from "../../store/user/user.actions";
import Button from "@material-ui/core/Button";
import LogoImg from "../../images/logo.jpg";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// Icons
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import SatelliteOutlinedIcon from "@material-ui/icons/SatelliteOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

// NAVIGATIONAL OPTIONS with title, url, id, icon

const NAV_OPTS = [
  { text: "Dashboard", url: "/", id: 1, icon: <DashboardOutlinedIcon /> },
  {
    text: "Installation Tickets",
    url: "/",
    id: 2,
    icon: <AddCircleOutlineOutlinedIcon />,
  },
  { text: "Maintenance Tickets", url: "/", id: 3, icon: <TuneOutlinedIcon /> },
  {
    text: "User Management",
    url: "/user-manage",
    id: 4,
    icon: <PersonOutlinedIcon />,
  },
  {
    text: "Satellite Management",
    url: "/",
    id: 5,
    icon: <SatelliteOutlinedIcon />,
  },
];

// Drawer setup for css styles
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Header = ({ window, activeUser, children, logout }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <div className="navbar">
        {NAV_OPTS.sort().map(({ id, text, url, icon }) => (
          <MenuItem className="item" key={id}>
            <Link className="navLink" to={url}>
              {icon}
              <span>{text.toUpperCase()} </span>
            </Link>
          </MenuItem>
        ))}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Link className="logo-container" to="/">
          <img src={LogoImg} className="logo" alt="NIAS powered by KSDAC LLP" />
        </Link>
      </Hidden>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden only={["md", "lg", "xl"]}>
            <Link to="/">
              <img
                src={LogoImg}
                className="logo"
                alt="NIAS powered by KSDAC LLP"
              />
            </Link>
          </Hidden>
          <div className="options">
            <div className="option" onClick={() => logout()}>
              <Button color="primary">
                <ExitToAppOutlinedIcon />
                SIGN OUT
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav
        className={classes.drawer}
        aria-label="mailbox folders"
        color="primary"
      >
        {/* Make sure to keep the same value as mentioned in below hidden to the use-styles mentioned above!.
            For eg: if Hidden mdUp, all usetyles breakpoints should act with "md" */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: (itemId) => dispatch(logout(itemId, true)),
});

const mapStateToProps = createStructuredSelector({
  activeUser: selectActiveUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
