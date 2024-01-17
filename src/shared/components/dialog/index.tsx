import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '../../../../node_modules/@mui/material/index';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { StyledButton } from '../button/index';

export interface DialogProps {
    openProps: boolean;

    title: string;
    onClose: () => void;
    onConfirm: () => void;
}


const RoundDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '10px',
          padding: theme.spacing(2),
    },


    // '& .MuiDialogContent-root': {
    // },
    // '& .MuiDialogActions-root': {
    //   padding: theme.spacing(1),
    // },
}));



export default function StyledDialog(props: any) {
    const { openProps, onConfirm, onClose } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onClose()
    };

    React.useEffect(() => {
        setOpen(openProps)
    }, [openProps])

    return (
        <React.Fragment>
            <RoundDialog
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{props.title}   <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton></DialogTitle>
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={handleClose}>Cancelar</StyledButton>
                    <StyledButton variant="contained" onClick={handleClose}>Confirmar</StyledButton>
                </DialogActions>
            </RoundDialog>
        </React.Fragment>
    );
}