import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';


interface ReuseableDialogProps {
    open: boolean,
    onClose: () => void,
    title: string,
    children: React.ReactNode,
    actions?: React.ReactNode
}
function ReuseableDialog({
    open,
    onClose,
    title,
    children,
    actions
}: ReuseableDialogProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            {actions && <DialogActions>{actions}</DialogActions>}
        </Dialog>
    );
}

export default ReuseableDialog