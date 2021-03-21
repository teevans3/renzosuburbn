import React from 'react';
import {Typography, Grid, Link, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {articles} from '../Constants.js';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    CardItem: {
        padding: '24px',
        [theme.breakpoints.down('md')]: {
            padding: '16px'
        },
    },
    CardBackdrop: {
        backgroundColor: 'white',
        width: '100%'
    },
    Card: {
        width: '100%',
        color: 'black',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    ArticleImg: {
        paddingTop: '100%',
        height: 'auto',
        position: 'relative',
    },
    CardSubtitle: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        border: 'none',
        padding: '0 4px 0 4px',
        '& p': {
            fontFamily: 'Imbue, serif',
            fontSize: '22px',
        },
    },
    CardContent: {
        height: 'auto',
        width: '100%',
        padding: '8px',
    },
    CardTitle: {
        fontSize: '34px',
        textAlign: 'left',
        fontFamily: '"Special Elite", cursive', 
    },
}));

const Press = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item md={1} />
            <Grid md={10} sm={12} item container >
                {articles.map(article => {
                    return (
                        <Grid item sm={12} md={6} lg={4} container className={classes.CardItem}>
                            <Paper className={classes.CardBackdrop} elevation={24} square >
                            <Card className={classes.Card} square component={Link} href={article.link} target="_blank">
                                <Grid item sm={12}>
                                    <CardMedia image={article.image} className={classes.ArticleImg}>
                                    <Paper className={classes.CardSubtitle} square elevation={0}>
                                        <Typography gutterBottom><b>{article.publisher} • {article.publishDate.getUTCFullYear()}</b></Typography>
                                    </Paper>
                                    </CardMedia>
                                </Grid>
                                <Grid item sm={12}>
                                    <CardContent className={classes.CardContent}>
                                        <Typography className={classes.CardTitle}>{article.title}</Typography>
                                    </CardContent>
                                </Grid>
                            </Card>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item md={1}/>
        </Grid>
       
    );
}

export default Press;