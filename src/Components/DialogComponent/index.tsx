import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AppIProps } from '../Dashboard';

export interface DialogTitleProps {
    id: string;
    open: boolean;
    title: string;
    data: AppIProps[];
    setData: (data: AppIProps[]) => void;
    editContent: { editData: AppIProps | null, setEditData: (data: AppIProps | null) => void; };
    setOpen: (staus: boolean) => void;
}

export interface BootstrapIProps {
    id: string;
    title: string;
    handleClose: () => void;
}


const BootstrapDialogTitle: FunctionComponent<BootstrapIProps> = (props) => {
    const { handleClose, title, id } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} id={id}>
            {title}
            {handleClose ? (
                <IconButton
                    aria-label="close"
                    onClick={() => handleClose()}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        background: "#e2e2f5"
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};


export default function CustomizedDialogs(props: DialogTitleProps) {
    const { open, setOpen, data, setData, editContent: { editData, setEditData } } = props;

    const [taskName, setTaskName] = useState<string>('');
    const [description, setDescription] = useState<string>('');


    useEffect(() => {
        if (editData) {
            setTaskName(editData?.title);
            setDescription(editData?.description);
        }
    }, [editData])

    const handleClose = () => {
        setOpen(false);
        setEditData(null);
        setTaskName('');
        setDescription('');
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {

        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value)
        } else {
            setDescription(value)
        }
    }

    const handleSave = () => {
        let taskObj = { id: Math.random().toString(36).substr(2, 9), title: taskName, description: description, done: false };
        setData([...data, taskObj]);
        handleClose();
    }

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="lg"
                classes={{ paper: "dialog_main_class" }}
            >
                <BootstrapDialogTitle handleClose={handleClose} {...props} />
                <DialogContent dividers>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows={5} className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type="button" autoFocus disabled={!(taskName !== "" && description !== "")} onClick={handleSave}>
                        {editData ? "Update Task" : "Assign"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}