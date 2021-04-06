import React from 'react';

import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import SpotifyLogo from '../public/social/SpotifyLogo.png';
import TwitchLogo from '../public/social/TwitchLogo.png';

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

    const socialItems = [
        {
            social: 'Apple Music',
            link: 'https://music.apple.com/us/artist/renzo-suburbn/1255335971',
            icon: <AppleIcon className={classes.Icon}></AppleIcon>
        },
        {
            social: 'Spotify',
            link: 'https://open.spotify.com/artist/69qG49IaZkjleL2vXwdTuA',
            icon: <img src={SpotifyLogo} className={classes.CustomIcon} alt="Spotify Icon"/>
        },
        {
            social: 'Twitch',
            link: 'https://www.twitch.tv/renzosuburbn',
            icon: <img src={TwitchLogo} className={classes.CustomIcon} alt="Twitch Icon"/>
        },
        {
            social: 'YouTube',
            link: 'https://www.youtube.com/channel/UCg7w3RP6lwFlmVttala7h_w',
            icon: <YouTubeIcon className={classes.Icon}></YouTubeIcon>
        },
        {
            social: 'Instagram',
            link: 'https://www.instagram.com/renzosuburbn/',
            icon: <InstagramIcon className={classes.Icon}></InstagramIcon>
        },
        {
            social: 'Twitter',
            link: 'https://twitter.com/renzosuburbn',
            icon: <TwitterIcon className={classes.Icon}></TwitterIcon>
        },
        {
            social: 'Facebook',
            link: 'https://www.facebook.com/renzosuburbn',
            icon: <FacebookIcon className={classes.Icon}></FacebookIcon>
        },

    ]

    return (
        <List>
            {
            socialItems.map(item => {
                return (
                    <ListItem key={item.social}>
                        <Link href={item.link} target="_blank">
                            {item.icon}
                        </Link>
                    </ListItem>
                );
            })
            }
        </List>
    )
}

export default SideDrawer;