import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Error = (props) => {
    return (
        <Dialog open onClose={() => props.setError(false)}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    There was an problem processing your request. Please try again later.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default Error;