import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Navigation/Navbar';
import Home from './Pages/Home';
import Music from './Pages/Music';
import Closet from './Pages/Closet';
import Tour from './Pages/Tour';
import Videos from './Pages/Video';
import Press from './Pages/Press';
import {Button, Grid, Link, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useBeforeunload } from 'react-beforeunload';
import { useTheme } from '@material-ui/core/styles';
import extClasses from './Pages/Home.module.css';
import Visualizer from './public/videos/Visualizer.mp4';
import Nightmare from './public/assets/Nightmare.png';
import TextBox from './public/assets/TextBox.png';
import EnterButton from './public/assets/EnterButton.png';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


const useStyles = makeStyles({
  Button: {
    zIndex: '10',
    position: 'absolute',
    borderRadius: '100px',
    margin: 'auto',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
  Visualizer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'fill'
  },
  MainBackground: {
    background: 'linear-gradient(white 120px, 180px, pink 240px)',
    top: '64px',
    bottom: '0',
    paddingBottom: '0',
    width: '100%',
    margin: '0',
    height: 'auto',
    minHeight: '100vh',
  },
});

function App() {
  const [firstTime, setFirstTime] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [displayEnter, setDisplayEnter] = useState(false);
  const [displaySubscribe, setDisplaySubscribe] = useState(true);

  const theme = useTheme();
  const classes = useStyles(theme);

   // Wait 10 seconds for visualizer to play, then allow user to enter site via enter button
   useEffect(() => {
    localStorage.setItem('firstTime', false)
    // document.getElementById('visualizer').play();
    setTimeout(() => {
      setDisplayEnter(true);
    }, 1)
  }, [])

  // Check if Renzo is live on twitch
  useEffect(() => {
    axios.post('/api/v1/postTwitch')
    .then(data => {
        if (data === 'is live') {
          console.log("Renzo is live!");
          setIsLive(true);
        } else {
          console.log("Renzo is not live.");
          setIsLive(false);
        }
    })
    .catch(err => {
      // TODO
      console.log(err);
    })

  }, [])


  useBeforeunload(localStorage.removeItem('firstTime'));


  let display = (
      <div className={`App ${classes.MainBackground}`}>
          <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route path="/music" component={Music} />
              <Route path="/closet" component={Closet} />
              <Route path="/tour" component={Tour} />
              <Route path="/video" component={Videos} />
              <Route path="/press" component={Press} />
              <Route path="/#about" component={Home} />
              <Route path="/" render={() => (
                  <Home displaySubscribe={displaySubscribe} setDisplaySubscribe={() => setDisplaySubscribe()} />
              )}/>
            </Switch>
          </BrowserRouter>
          <Hidden xsDown>
            <Grid container>
                <Grid item md={12}>
                  <Link href="https://www.twitch.tv/renzosuburbn" target="_blank">
                      <img src={Nightmare} className={extClasses.LiveImage} alt=""></img>
                  </Link>
                  <Link href="https://www.twitch.tv/renzosuburbn" target="_blank">
                      <img style={isLive ? {display: 'block'} : {display: 'none'}} className={extClasses.TextBox} src={TextBox} alt="I'm Live!"></img>
                  </Link>
                </Grid>
            </Grid>
          </Hidden>
      </div>  
  );

  // Display visualizer if user visits site for the first time and is not on a small screen
  if ((localStorage.getItem('firstTime') === null) && firstTime && window.innerWidth > 1200) {
    display = (
      <div className="App">
          <Button className={classes.Button + ' ' + extClasses.EnterGlobe} style={displayEnter ? {display: 'block'} : {display: 'none'}} onClick={() => setFirstTime(false)}><img src={EnterButton} style={{width: '100%', height: '100%'}} alt="Enter Here" /></Button>
          <video className={classes.Visualizer} autoPlay muted loop>
            <source src={Visualizer} type="video/mp4" />
          </video>
      </div>
    );
  }
  return display;
}

export default App;