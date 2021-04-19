import React, {useState} from 'react';

import { Typography, Grid, Button, TextField, Hidden, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

import About from './About';
import Error from '../UI/Error/Error';
import Success from '../UI/Success/Success';
import Loader from '../UI/Loader/Loader';
import {newMusic} from '../Constants';
import {validateEmail} from '../helpers';
import Globe from '../public/assets/Globe.png';
import NauseousSingleLogo from '../public/assets/NauseousSingleLogo.png';
import RenzoOne from '../public/assets/RenzoOne.png';
import extClasses from '../css/Home.module.css';

const useStyles = makeStyles(theme => ({
    SingleLogo: {
        width: '54vw',
        height: '21vw',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'auto'
        }
    },
    NewSingleContainer: {
        width: '100%',
        '& p': {
            fontFamily: 'Imbue, serif',
            fontSize: '4vh',
        }
    },
    SpeechButton: {
        fontFamily: '"Press Start 2P", cursive',
        '&:hover': {
            color: 'white',
            backgroundColor: 'black',
        }
    },
    SubscribeButton: {
        margin: '1vw auto 2vw 32%',
        height: '64px',
        fontSize: '24px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'black'
        },
        [theme.breakpoints.down('xs')]: {
            height: '48px',
            fontSize: '18px',
            marginLeft: 'auto',
            padding: '8px',
        }
    }
}));

const Home = (props) => {
    const [displaySubscribeForm, setDisplaySubscribeForm] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    // const [emailSuccess, setEmailSuccess] = useState(false);

    const classes = useStyles();

    const closePopup = () => {
        props.setDisplaySubscribe(false);
    }

    const openSubscribeForm = () => {
        props.setDisplaySubscribe(false);
        setDisplaySubscribeForm(true);
    }

    const closeSubscribeForm = () => {
        props.setDisplaySubscribe(false);
        setDisplaySubscribeForm(false);
    }

    async function submitEmail(e) {

        e.preventDefault();
        // setLoading(true);

        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            console.log('email is not valid!');
            // setEmailError(true);
            // setLoading(false);
            return;
        };

        axios.post('/api/v1/postEmail', {
            email: email
        })
        .then(() => {
            // TODO
            console.log("Email submitted for subscription");
            // setLoading(false);
            // props.setSuccess(true);
        })
        .catch(err => {
            // TODO
            // props.setError(true);
            // setLoading(false);
            console.log(err);
        })
        props.setDisplaySubscribe(false);
        setDisplaySubscribeForm(false);
    }

    let subscribePopup = null;

    if (props.displaySubscribe) {
        subscribePopup = (
            <Hidden smDown>
                <Grid item xs={12} container justify="flex-end" >
                    <Grid item xs={2} className={extClasses.SpeechBubble}>
                        <Typography>Subscribe to our mailing list?</Typography>
                        <Button onClick={() => openSubscribeForm()} className={classes.SpeechButton}>Sure!</Button>
                        <Button onClick={() => closePopup()} className={classes.SpeechButton}>Later</Button>
                    </Grid>
                    <img src={RenzoOne} className={extClasses.SubscribeImage} alt=""></img>
                </Grid>
            </Hidden>
        )
    }

    return (
        <div>
            <Grid container>
                {/* {loading ? <Loader /> : null} */}
                <Grid item sm={12}>
                    <a href={newMusic.link} target="_blank" rel="noopener noreferrer">
                        <img src={NauseousSingleLogo} alt={`"${newMusic.title.toUpperCase()}"`} className={classes.SingleLogo}></img>
                    </a>
                </Grid>
                <Grid item sm={12} className={classes.NewSingleContainer} gutterBottom>
                    <Typography gutterBottom align='center'>
                        {`NEW ${newMusic.musicType}, OUT EVERYWHERE`.toUpperCase()}
                    </Typography>
                </Grid>
                {subscribePopup}
                <Dialog open={displaySubscribeForm} onClose={() => closeSubscribeForm()} aria-labelledby="SubscribeForm">
                    <DialogTitle id="SubscribeForm">Subscribe to Renzo Suburbn.</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter your contact information to receive news on upcoming releases, shows, merch, and more.
                        </DialogContentText>
                        <form>
                            <TextField
                                margin="dense"
                                id="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                                // error={emailError}
                                helperText={emailError ? "Enter a valid email address." : null}
                                variant="outlined"
                                className={classes.EmailInput}
                            />
                            <Button onClick={(e) => submitEmail(e)} className={classes.SubscribeButton + ' ' + extClasses.Retro} component={Paper} elevation={12} style={{justifyContent: 'center'}}>Subscribe</Button>
                        </form>
                    </DialogContent>
                </Dialog>
                {props.error ? <Error setError={props.setError} /> : null}
                {props.success ? <Success setSuccess={props.setSuccess} /> : null}
                <Grid container>
                    <img className={extClasses.Globe} src={Globe} alt="Renzo Globe Logo"></img>
                </Grid>
            </Grid>
            <About id="about"/>
        </div>
    );
}

export default Home;