import React, {useState} from 'react';
import {Typography, Grid, Button, TextField, Hidden, Paper} from '@material-ui/core';
import extClasses from './Home.module.css';
import {makeStyles} from '@material-ui/core/styles'
import About from './About';
import {newMusic} from '../Constants';
import RenzoOne from '../public/assets/RenzoOne.png';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Globe from '../public/assets/Globe.png';
import NauseousSingleLogo from '../public/assets/NauseousSingleLogo.png';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();


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
    const classes = useStyles();

    const [displaySubscribeForm, setDisplaySubscribeForm] = useState(false);

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

        // TODO: validate form

        e.preventDefault();

        axios.post('/api/v1/postEmail', {
            email: document.getElementById('email').value
        })
        .then(res => {
          res.text()
            .then(data => {
                // TODO
                props.setDisplaySubscribe(false);
                setDisplaySubscribeForm(false);
            })
            .catch(err => {
              // TODO
              console.log(err);
            })
        })
        .catch(err => {
          // TODO
          console.log(err);
        })
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
                <Grid item sm={12}>
                    <a href={newMusic.link} target="_blank" rel="noopener noreferrer">
                        <img src={NauseousSingleLogo} alt={`"${newMusic.title.toUpperCase()}"`} className={classes.SingleLogo}></img>
                    </a>
                </Grid>
                <Grid item sm={12} className={classes.NewSingleContainer}>
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
                                className={classes.EmailInput}
                            />
                            <Button onClick={(e) => submitEmail(e)} className={classes.SubscribeButton + ' ' + extClasses.Retro} component={Paper} elevation={12} style={{justifyContent: 'center'}}>Subscribe</Button>
                        </form>
                    </DialogContent>
                </Dialog>
                <Grid container>
                    <img className={extClasses.Globe} src={Globe} alt="Renzo Globe Logo"></img>
                </Grid>
            </Grid>
            <About id="about"/>
        </div>

    );
}

export default Home;