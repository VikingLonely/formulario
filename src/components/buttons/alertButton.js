import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function AlertButton(props) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
        if (props.id === 1) {
            props.contDica(1)
        }
        if (props.id === 2) {
            props.contFrustado(1)
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className='Button' variant='contained' onClick={handleClickOpen} disableElevation>
                {props.value}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.mensage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>Close</Button>

                </DialogActions>

            </Dialog>
        </div>
    );
}
