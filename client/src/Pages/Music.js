import React from 'react';
import {albums} from '../Constants.js';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Typography, Grid, Link, Hidden, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import extClasses from './Music.module.css';



const useStyles = makeStyles((theme) => ({
    Card: {
        '& div': {
            backgroundColor: 'pink',
        },
        width: '100%',
        marginBottom: '4vw',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0'
        },
        position: 'relative',
        color: 'black',
        overflow: 'hidden',
    },
    AlbumImg: {
        paddingTop: '100%',
        height: 'auto',
    },
    CardHeader: {
        fontSize: '24px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
        },
        fontFamily: '"Press Start 2P", cursive',
    },
    CardSubheader: {
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px'
        },
        fontFamily: '"Press Start 2P", cursive',
    },
    TableContainer: {
        position: 'absolute',
        overflowY: 'auto !important',
        overflow: 'auto !important',
        width: '38%',
        height: '100%',
        '& td': {
            border: 'none',
        },
        '& table': {
            overflowY: 'auto !important',
            overflow: 'auto !important',
        }
    },
    SongText: {
        '& p': {
            color: 'black',
            fontSize: '24px',
            [theme.breakpoints.down('md')]: {
                fontSize: '16px',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px'
            }
        },
        [theme.breakpoints.down('md')]: {
            padding: '0',
        }
    }
}));


const Music = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item md={2} sm={1}/>
            <Grid item md={8} sm={10} container>
                {albums.map(album => {
                    return (
                        <Paper elevation={14} className={classes.Card} key={`${album.title}-${album.musicType}-${album.releaseDate.getUTCFullYear()}`}>
                            <Card square>
                                <Grid item md={12} xs={12} container>
                                    <Grid item sm={7} xs={12}>
                                        <Link href={album.link}>
                                            <CardMedia className={classes.AlbumImg} image={album.image} title={`${album.title} (${album.musicType}) - ${album.releaseDate.getUTCFullYear()}`}/>
                                        </Link>
                                    </Grid>
                                    <Hidden xsDown>
                                        <Grid item sm={5}>
                                            <CardContent>
                                                <Typography className={classes.CardHeader}>{album.title}</Typography>
                                                <Typography gutterBottom className={classes.CardSubheader}>{album.releaseDate.getUTCFullYear()}</Typography>
                                                <TableContainer className={classes.TableContainer}>
                                                    <Table size="small">
                                                        <TableBody>
                                                            {album.tracks.map(song => {
                                                                return (
                                                                    <TableRow>
                                                                        <TableCell className={extClasses.GlitchWrapper + ' ' + classes.SongText}>
                                                                            <Typography className={extClasses.glitch} data-glitch={song}>{song}</Typography>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                )
                                                            })}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </CardContent>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </Card>
                        </Paper>
                    );
                })}
            </Grid>
            <Grid item md={2} sm={1}/>
        </Grid>
    );
}

export default Music;