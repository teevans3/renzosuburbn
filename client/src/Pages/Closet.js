import React from 'react';
import {merch} from '../Constants.js';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Typography, Grid, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import extClasses from './Closet.module.css';
import { useTheme } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
    NoBottom: {
        margin: 0
    },
    Card: {
        background: 'none',
        boxShadow: 'none',
    },
    ImageContainer: {
        position: 'relative',
        top: '0',
        left: '0'
    },
    CardContent: {
        color: 'black',
    },
    ItemTitle: {
        fontSize: '16px',
        fontFamily: '"Press Start 2P", cursive',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px'
        }
    },
    ItemPrice: {
        fontSize: '28px',
        fontFamily: 'Imbue, serif',
    }
}));


const Merch = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Grid container>
            <Grid item sm={1} />
            <Grid item sm={10} container spacing={8} className={classes.NoBottom} >
                {merch.map(item => {
                    return (
                        <Grid item sm={12} md={4}>
                            <Card color="secondary" className={classes.Card}>
                                <div className={classes.ImageContainer}>
                                    <CardMedia className={extClasses.ItemImgFront} image={item.imageFront} component={Link} href={item.link} target="_blank" loading="lazy"/>
                                    <CardMedia className={extClasses.ItemImgBack} image={item.imageBack} component={Link} href={item.link} target="_blank" loading="lazy"/>
                                </div>
                                <CardContent className={classes.CardContent}>
                                    <Typography className={classes.ItemTitle}>{item.title}</Typography>
                                    <Typography className={classes.ItemPrice}>${item.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item sm={1} />
        </Grid>
    );
}

export default Merch;