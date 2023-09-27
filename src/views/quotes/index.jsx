import React, { useState, useContext, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  Button,
  TextField,
  useTheme,
} from "@mui/material";
import { QuotesContext } from "../../Backend/Context/QuotesContext";
import Header from "../../components/Header";
import QuotesCategories from "../../components/Categories";
import { Category } from "@mui/icons-material";

function Quotes() {
  const { quotes, fetchData, setLoading, loading, fetQuotes, saveQuote } =
    useContext(QuotesContext);
  const [addSingle, setAddSingle] = useState(true);

  const [quoteTxt, setQuoteTxt] = useState("");
  const [quoteAuther, setQuoteAuther] = useState("");
  const [quoteCategory, SetQuoteCategory] = useState("");

  const [addAsJson, setAddAsJson] = useState(false);
  const [subTitle, setSubTitle] = useState("Add New Single Quote");
  console.log("You are in quotes");
  const theme = useTheme();
  // function fetQuotes(){
  //   fetchData()
  // }
  const newQuotes = {
    text: quoteTxt,
    auther: quoteAuther,
    category: quoteCategory,
  };
  useEffect(() => {
    fetQuotes();
    console.log("Data is ", quotes);
  }, []);
  function displayTest() {
    console.log("Quotes Text", quoteTxt);
    console.log("Authers Text", quoteAuther);
    console.log("Category Text", quoteCategory);
  }
  function handleSingleQuote() {
    setAddSingle(true);
    setAddAsJson(false);
    setSubTitle("Add New Single Quote");
  }
  function handleAsJson() {
    setAddSingle(false);
    setAddAsJson(true);
    setSubTitle("Add New Quotes As Json");
  }

  return (
    <Box m="6.5rem 16.5rem">
      <Box display="flex" mr="5rem" gap="20px">
        <Button
          backgroundcolor="black"
          sx={{
            padding: "20px",
            backgroundColor: "#5B0888",
            color: "white",
            "&:hover": {
              backgroundColor: "#5B0888",
              color: "white",
            },
          }}
          onClick={() => {
            handleSingleQuote,
            // displayTest
            saveQuote(newQuotes);
          }}
        >
          Add Quotes
        </Button>
        <Button
          backgroundcolor="black"
          sx={{
            padding: "20px",
            backgroundColor: "#5B0888",
            color: "white",
            "&:hover": {
              backgroundColor: "#5B0888",
              color: "white",
            },
          }}
          onClick={displayTest}
        >
          Add Quotes As Json
        </Button>

        <Button
          backgroundcolor="black"
          sx={{
            padding: "20px",
            backgroundColor: "#5B0888",
            color: "white",
            "&:hover": {
              backgroundColor: "#5B0888",
              color: "white",
            },
          }}
        >
          Update Quotes
        </Button>
      </Box>
      <Header
        title="Quotes"
        subTitle={subTitle}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      />
      <Box display="block" gap="20px">
        {addSingle ? (
          <>
            <TextField
              id="outlined-basic"
              label="Auther"
              variant="outlined"
              sx={{ width: "30%" }}
              value={quoteAuther}
              onChange={(e) => setQuoteAuther(e.target.value)}
            />
            <br />
            <br />
            <QuotesCategories
              value={quoteCategory}
              onChange={(newValue) => SetQuoteCategory(newValue)}
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
          </>
        ) : (
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
        )}
      </Box>
    </Box>
  );
}

export default Quotes;
