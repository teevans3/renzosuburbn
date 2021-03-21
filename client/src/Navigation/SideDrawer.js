import React from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
import SpotifyLogo from '../public/social/SpotifyLogo.png';
import TwitchLogo from '../public/social/TwitchLogo.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles({
    Icon: {
        color: 'pink',
        fontSize: '5rem',
    },
    CustomIcon: {
        paddingTop: '0.2vw',
        paddingLeft: '0.5vw',
        width: '4rem',
        height: '4rem',
    },
});

const SideDrawer = () => {

    const classes = useStyles();

    return (
        <List>
            <ListItem>
                <Link href="https://music.apple.com/us/artist/renzo-suburbn/1255335971" target="_blank">
                    <AppleIcon className={classes.Icon}/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://open.spotify.com/artist/69qG49IaZkjleL2vXwdTuA" target="_blank">
                    <img src={SpotifyLogo} className={classes.CustomIcon} alt="Spotify Icon"/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.twitch.tv/renzosuburbn" target="_blank">
                    <img src={TwitchLogo} className={classes.CustomIcon} alt="Twitch Icon"/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.youtube.com/channel/UCg7w3RP6lwFlmVttala7h_w" target="_blank">
                    <YouTubeIcon className={classes.Icon}/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.instagram.com/renzosuburbn/" target="_blank">
                    <InstagramIcon className={classes.Icon}/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://twitter.com/renzosuburbn" target="_blank">
                    <TwitterIcon className={classes.Icon}/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.facebook.com/renzosuburbn"  target="_blank">
                    <FacebookIcon className={classes.Icon}/>
                </Link>
            </ListItem>
        </List>
    )
}

export default SideDrawer;