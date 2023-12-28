
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ onClose, onClick,  header,body, btn1,btn2 }) {
  const handleAgree = () => {
    console.log("Delete ");
    onClick()
    onClose();
  };

  const handleDisagree = () => {
    console.log("Cancel Deletion");
    onClose(); 
  };

  return (
    <Dialog
      open={true} 
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree} color="primary">
          {btn1}
        </Button>
        <Button onClick={handleAgree} sx={
            btn2 === 'Delete'
              ? { p: '0.4rem', bgcolor: 'red', color: 'white' }
              : { color: 'primary', autoFocus: true }
          }>
          {btn2}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
