import "./NewsCard.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function NewsCard(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >

        <DialogTitle id="alert-dialog-title">
          <p className="NewsDate">{props.date}</p>
          {props.title}
          <hr className="HeadigAccent" />

        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            {props.DialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} style={{ borderRadius: '12px' }}>Закрыть</button>
        </DialogActions>
      </Dialog>
      <div className="NewsCard" onClick={handleClickOpen}>

        <p className="NewsDate">{props.date}</p>
        <h3 className="NewsHeading">
          {props.title}
          <hr className="HeadigAccent" />
        </h3>
        <article className="NewsText">{props.text}</article>
      </div>
    </>
  );
}
