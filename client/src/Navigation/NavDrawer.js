import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import RenzoLogo from '../public/assets/RenzoLogo.png';
import RenzoGlogo from '../public/assets/RenzoGlogo.png';


const useStyles = makeStyles({
    HomeLogo: {
        width: '100%',
        height: '26vw',
        backgroundImage: `url(${RenzoLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        '&:hover': {
            cursor: 'pointer',
            backgroundImage: `url(${RenzoGlogo})`,
            backgroundColor: 'white',
            borderColor: 'none',
        },
    },
    LinkText: {
        color: 'pink',
        fontFamily: '"Press Start 2P", cursive',
        fontSize: '24px',
        textShadow: '1px 1px #c8c8c8',
        padding: '1vw',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
            cursor: 'pointer',
            color: 'white',
            textShadow: '1px 1px pink',
            backgroundColor: 'black',
        },
        margin: '0',
    },
    ActiveLink: {
        backgroundColor: 'black',
        color: 'white',
        textShadow: '1px 1px pink',
        padding: '2vw'
    },
});

const NavDrawer = (props) => {

    const classes = useStyles();

    const AboutFunct = () => {
        props.closeDrawer();
    };

    return (
        <List>
            <ListItem button component={NavLink} to="/" className={classes.HomeLogo}>
            </ListItem>
            {props.navItems.map(item => {
                return (
                    <ListItem key={`${item.name}-navdrawer`}>
                        <Typography
                            variant="h6"
                            to={item.path}
                            className={classes.LinkText}
                            component={item.name === 'ABOUT' ? HashLink : item.name === 'SOCIAL' ? Link : NavLink}
                            activeClassName={item.name === 'ABOUT' || item.name === 'SOCIAL' ? null : classes.ActiveLink}
                            onClick={item.name === 'SOCIAL' ? () => props.socialDrawer() : item.name === 'ABOUT' ? () => AboutFunct(): () => props.closeDrawer()}
                            smooth="true">
                            {item.name}
                        </Typography>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default NavDrawer;