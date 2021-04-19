import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Success = (props) => {
    return (
        <Dialog open onClose={() => props.setSuccess(false)}>
            <DialogTitle>Success!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You are now subscribed to receive emails and updates from Renzo Suburbn.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default Success;