import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import QuotesCategories from "./Categories";
import { useState, useEffect } from "react";

export default function UpdateDialog({
  onClose,
  onClick,
  header,
  author,
  text,
  category,
  btn1,
  btn2,
  id,
  updateQuoteData,
  fetchData
}) {
  const [quoteTxt, setQuoteTxt] = useState(text || "");
  const [quoteAuther, setQuoteAuther] = useState(author || "");
  const [quoteCategory, SetQuoteCategory] = useState(category || "");

  useEffect(()=> {
    console.log(`Want to update Quote is: ${id}`);
  },[])


  useEffect(()=> {
    setQuoteTxt(text || "");
    setQuoteAuther(author || "");
    SetQuoteCategory(category || "");
  },[text,author,category])

  
  

  const handleDelete = () => {
    const updateQuote = {
      text: quoteTxt,
      auther: quoteAuther,
      category: quoteCategory,
    };

    updateQuoteData(id,updateQuote)
      .then((response) => {
        console.log(`Sucessfully Updated Quote ID: ${id}`, response);
        fetchData()
      })
      .catch((error) => {
        console.error(`Error Updating quote with ID: ${id}`, error);
      });

    console.log("Updated ");
    // onClick(updateQuote);
    onClose();
  };

  const handleDisagree = () => {
    console.log("Cancel Updation");
    onClose();
  };

  return (
    // <div className="w-5">
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            id="outlined-basic"
            label="Auther"
            variant="outlined"
            sx={{ width: "80%" }}
            value={quoteAuther}
            onChange={(e) => setQuoteAuther(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Oraah....."
            multiline
            rows={10}
            placeholder="Add A new quotes"
            fullWidth={true}
            sx={{ fontSize: "3.2rem" }}
            value={quoteTxt}
            onChange={(e) => setQuoteTxt(e.target.value)}
          />
          <br />
          <br />
          <QuotesCategories
            value={quoteCategory}
            onChange={(newValue) => SetQuoteCategory(newValue)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree} color="primary">
          {btn1}
        </Button>
        <Button
          onClick={handleDelete}
          sx={
            btn2 === "Delete"
              ? { p: "0.4rem", bgcolor: "red", color: "white" }
              : { color: "primary", autoFocus: true }
          }
        >
          {btn2}
        </Button>
      </DialogActions>
    </Dialog>
    // </div>
  );
}
