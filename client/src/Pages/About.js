import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RenzoLogoBig from '../public/assets/RenzoLogoBig.png';
import RenzoGlogoBig from '../public/assets/RenzoGlogoBig.png';
import extClasses from '../css/About.module.css';

const useStyles = makeStyles((theme) => ({
    AboutTitle: {
        height: '100%',
        position: 'relative',
        top: '0',
        bottom: '0',
    },
    AboutContainer: {
        '& p': {
            fontFamily: 'Imbue, serif',
            color: 'black',
            fontSize: '48px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '32px'
            }
        }
    },
    OtherArtistContainer: {
        marginTop: '2vw',
        '& p': {
            fontSize: '36px',
            '& span': {
                fontSize: '42px',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '36px'
                }
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '24px'
            }
        },
        '& span': {
            fontFamily: '"Press Start 2P", cursive',
            fontSize: '24px !important'
        }
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} id="about" className={classes.AboutTitle}>
                <img src={RenzoLogoBig} alt="Renzo Suburbn" className={extClasses.Title}></img>
                <img src={RenzoGlogoBig} alt="Renzo Suburbn" className={extClasses.TitleGlow}></img>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item container xs={10} className={classes.AboutContainer}>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                        North Carolina born rapper, producer, & graphic designer. 
                    </Typography>
                    <Typography gutterBottom>
                        Lofi, saturated, and sweet songs deliver alt-pop and hip hop earworms.
                    </Typography>
                </Grid>
                <Grid item md={3} sm={2}></Grid>
                <Grid item md={6} sm={8} className={classes.OtherArtistContainer}>
                    <Typography>½ &nbsp; of &nbsp; <span>Josuburbn</span></Typography>
                    <Typography gutterBottom>¼ &nbsp; of &nbsp; <span>Dotwav Media</span></Typography>
                </Grid>
                <Grid item md={3} sm={2}></Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}

export default About;