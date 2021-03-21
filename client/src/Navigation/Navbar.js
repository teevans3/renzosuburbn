import React, {useState} from 'react';
import SideDrawer from './SideDrawer';
import { AppBar, Toolbar, Typography, Grid, Drawer, Paper, Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import extClasses from './Navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from './NavDrawer';
import RenzoLogo from '../public/assets/RenzoLogo.png';
import RenzoGlogo from '../public/assets/RenzoGlogo.png';
import CheckerBoard from '../public/assets/CheckerBoard.jpg';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
    NavBar: {
        backgroundImage: `url(${CheckerBoard})`,
        marginBottom: '1vw',
        boxShadow: 'none',
        height: '110px',
    },
    Toolbar: {
        padding: '1vw',
        position: 'relative',
    },
    HomeLogo: {
        width: '80vw',
        display: 'block',
        backgroundImage: `url(${RenzoLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        '&:hover': {
            cursor: 'pointer',
            backgroundImage: `url(${RenzoGlogo})`
        },
        height: '5vw',
        [theme.breakpoints.down('sm')]: {
            height: '20vw'
        }
    },
    Menu: {
        backgroundColor: 'pink',
        height: '12vw',
        width: '10vw',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    Relative: {
        position: 'relative',
    },
}));

const Navbar = () => {
    const [sideDrawer, setSideDrawer] = useState(false);
    const [navDrawer, setNavDrawer] = useState(false);

    const classes = useStyles();

    const navItems = [
        {
            name: 'MUSIC',
            path: '/music',
            id: 'musicLink'
        },
        {
            name: 'CLOSET',
            path: '/closet',
            id: 'closetLink'
        },
        {
            name: 'TOUR',
            path: '/tour',
            id: 'tourLink'
        },
        {
            name: 'VIDEO',
            path: '/video',
            id: 'videoLink'
        },
        {
            name: 'PRESS',
            path: '/press',
            id: 'pressLink'
        },
        {
            name: 'ABOUT',
            path: '/#about',
            id: 'aboutLink'
        },
        {
            name: 'SOCIAL',
            path: '#',
            id: 'socialLink'
        },
    ];

    const toggleDrawer = () => {
        setSideDrawer(!sideDrawer);
    };

    const toggleNavDrawer = () => {
        setNavDrawer(!navDrawer);
    };

    // Need this function to hide font when hovered over 
    // (cant do it in css because we can't access elements above with hover)
    const hoverEffectOn = (navId) => {
        document.getElementById(navId).style.color = 'black';
        document.getElementById(navId).style.textShadow = '1px 1px black';

    };

    const hoverEffectOff = (navId) => {
        document.getElementById(navId).style.color = 'pink';
        document.getElementById(navId).style.textShadow = '1px 1px #c8c8c8';
    };

    return (
        <AppBar position="static" className={classes.NavBar}>
            <Toolbar className={classes.Toolbar}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid item md={2} sm={10}>
                            <Grid to="/" component={NavLink} item className={classes.HomeLogo} style={{width: '100% !important'}}>
                            </Grid>
                        </Grid>
                        <Hidden mdUp>
                            <Grid item md={false} sm={2} >
                                <MenuIcon fontSize="large" className={classes.Menu} onClick={() => toggleNavDrawer()}/>
                            </Grid>
                        </Hidden>
                        <Hidden smDown>
                            <Grid md={10} sm={false} item container justify="space-evenly">
                                {navItems.map(item => {
                                    return (
                                        <Grid item md={1} sm={false} className={classes.Relative} key={item.name}>
                                            <Paper
                                                className={extClasses.NavPaper}
                                                disabled={item.name === 'SOCIAL' ? true : false}
                                                activeClassName={item.name === 'ABOUT' || item.name === 'SOCIAL' ? null : extClasses.ActiveNav}
                                                component={item.name === 'ABOUT' ? HashLink : NavLink}
                                                to={item.path}
                                                onClick={item.name === 'SOCIAL' ? () => toggleDrawer() : null}
                                                smooth="true"
                                                square>
                                                <Typography variant="h6" className={extClasses.LinkText} id={item.id}>
                                                    {item.name}
                                                </Typography>
                                            </Paper>
                                            <Paper
                                                className={extClasses.HoverNavPaper}
                                                activeClassName={item.name === 'ABOUT' || item.name === 'SOCIAL' ? null : extClasses.ActiveHoverNav}
                                                onMouseOver={() => hoverEffectOn(item.id)}
                                                onMouseOut={() => hoverEffectOff(item.id)}
                                                component={item.name === 'ABOUT' ? HashLink : NavLink}
                                                to={item.path} onClick={item.name === 'SOCIAL' ? () => toggleDrawer() : null}
                                                smooth="true"
                                                square>
                                                <Typography variant="h6" className={extClasses.HoverLinkText}>
                                                    {item.name}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Hidden>
                    </Grid>
                <Drawer open={sideDrawer} onClose={() => toggleDrawer()} anchor="right">
                    <SideDrawer />
                </Drawer>
                <Drawer open={navDrawer} onClose={() => toggleNavDrawer()} anchor="top">
                    <NavDrawer closeDrawer={toggleNavDrawer} socialDrawer={toggleDrawer} navItems={navItems} />
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;