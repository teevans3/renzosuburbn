import React from 'react';
import {Grid, Hidden, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {videos} from '../Constants';

const useStyles = makeStyles(theme => ({
    VideoContainer: {
        padding: '8px',
        [theme.breakpoints.down('sm')]: {
            padding: '0 0 16px 0',
        },
        background: 'none',
    },
    Video: {
        width: '100%',
        height: '22.5vw',
        [theme.breakpoints.down('sm')]: {
            height: '55vw',
            width: '100%',
        }
    },
    Primary: {
        height: '45vw',
        [theme.breakpoints.down('sm')]: {
            height: '55vw',
            width: '100%',
        }
    },
}))


const Videos = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Hidden xsDown>
                <Grid item sm={false} md={1}></Grid>
            </Hidden>
            <Grid item sm={12} md={10} container >
                {videos.map((vid, index) => {
                    return (
                        <Grid item component={Paper} elevation={0} key={vid} sm={12} md={index === 0 ? 12 : 6} className={classes.VideoContainer} align="center">
                                <iframe title={vid} className={index === 0 ? classes.Video + ' ' + classes.Primary : classes.Video} src={index === 0 ? vid + '?autoplay=1' : vid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid>
                    );
                })}
            </Grid>
            <Hidden xsDown>
                <Grid item sm={false} md={1}></Grid>
            </Hidden>
        </Grid>
    );
}

export default Videos;