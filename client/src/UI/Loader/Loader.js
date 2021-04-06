import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

import Globe from '../../public/assets/Globe.png';
import extClasses from '../../css/Loader.module.css';
// import extClasses from '../../css/Home.module.css';

// const useStyles = makeStyles({
//     Loader: {
//         width: '5vw',
//         height: '5vw',
//         zIndex: '20',
//         position: 'sticky',
//         top: '50%',
//         left: '50%'
//     }
// })

const Loader = () => {
    // const classes = useStyles();

    return (
        <div className={extClasses.Loader}></div>
    );
};

export default Loader;