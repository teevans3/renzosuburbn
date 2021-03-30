import React from 'react';
import {tours} from '../Constants.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import {Typography, Grid, Paper} from '@material-ui/core';
import {getDate} from '../helpers.js';
import {makeStyles, withStyles} from '@material-ui/core';
import RenzoLaying from '../public/assets/RenzoLaying.png';
import extClasses from './Tour.module.css';

const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MuiTableCell);

const useStyles = makeStyles((theme) => ({
    ResponsiveTitle: {
        [theme.breakpoints.down('md')]: {
            fontSize: '64px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '58px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '48px'
        }
    },
    TableContainer: {
        backgroundColor: 'pink',
        padding: '0 2vw 0 2vw',
        width: 'auto',
        '& table': {
            borderColor: 'black !important',
        }
    },
    RenzoLaying: {
        width: '75%',
        height: 'auto',
        margin: 'auto',
    },
    TableRow: {
        height: '4vw',
        color: 'black',
    },
    TableFont: {
        fontSize: '18px',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px'
        },
        fontFamily: '"Special Elite", cursive',
    },
    Separator: {
        padding: '0 36px 0 36px',
        fontSize: '36px',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px'
        },
        fontFamily: '"Special Elite", cursive',
    },
    SoldOutContainer: {
        height: '4vw',
        transform: 'scale(1)',
        '&::after': {
            content: '""',
            width: '100%',
            borderBottom: 'solid 3px red',
            position: 'absolute',
            left: '0',
            top: '50%',
            zIndex: '1',
        }
    },
    SoldOut: {
        fontSize: '18px',
        fontStyle: 'italic',
        fontFamily: '"Audiowide", cursive',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px'
        },
        padding: '0 8px 0 8px',
        position: 'relative',
        backgroundColor: 'pink',
        zIndex: '3',
        color: 'red',
    },
}));


const Tour = () => {
    const classes = useStyles();

    const toursTBA = ['TBA', 'TBA', 'TBA', 'TBA', 'TBA', 'TBA'];
    
    // reorder tours by date
    let tourDisplay = toursTBA.map((tour, index) => {
        return (
            <TableRow key={index} className={classes.TableRow}>
                <TableCell>
                    <Typography display="inline" className={classes.TableFont}>{tour}</Typography>
                    <Typography display="inline" className={classes.Separator}>☺</Typography>
                    <Typography display="inline" className={classes.TableFont}>{tour}</Typography>
                </TableCell>
                <TableCell className={classes.TableFont  + ' ' + classes.TBA} align="right">{tour}</TableCell>
            </TableRow>
        )
    });

    if (tours.length > 0) {
        tourDisplay = tours.map((tour, index) => {
            return (
                <TableRow key={tour.date} className={tour.soldOut ? classes.SoldOutContainer : classes.TableRow} style={index === tourDisplay.length - 1 ? {borderBottom: 'none'} : {borderBottom: '1px solid #e5acb6'}}>
                    <TableCell>
                        <Typography display="inline"className={classes.TableFont}>{tour.city}, {tour.state}</Typography>
                        <Typography display="inline" className={classes.Separator}>☺</Typography>
                        <Typography display="inline" className={classes.TableFont}>{tour.venue}</Typography>
                    </TableCell>
                    <TableCell>
                        {tour.soldOut ? <Typography display="inline" className={classes.SoldOut}>SOLD OUT</Typography> : <div></div>}
                    </TableCell>
                    <TableCell align="right">
                        <Typography className={classes.TableFont}>{getDate(tour.date)}</Typography>
                    </TableCell>
                </TableRow>
             );
        });
    };
    
    return (
        <Grid container>
            <Grid item sm={1} md={2}></Grid>
            <Grid item sm={10} md={8}>
                <p className={extClasses.TourTitle + ' ' + classes.ResponsiveTitle} gutterBottom>SUBURBIA TOUR</p>
                <Paper elevation={24}>
                <TableContainer className={classes.TableContainer}>
                    <Table size="medium" padding="none" >
                        <TableBody>
                            {tourDisplay}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
                <img src={RenzoLaying} className={classes.RenzoLaying} alt=""></img>
            </Grid>
            <Grid item sm={1} md={2}></Grid>
        </Grid>
    );
}

export default Tour;