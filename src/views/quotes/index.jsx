import React, { useState, useContext, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  Button,
  TextField,
  useTheme,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { QuotesContext } from "../../Backend/Context/QuotesContext";
import Header from "../../compos/Header";
import QuotesCategories from "../../compos/Categories";
import QuotesType from "../../compos/quotesType";
import CustomizedSnackbars from "../../compos/CustomisedSnackbar";
// import { Category } from "@mui/icons-material";
import QuoteCard from "../../compos/quoteCard";
import CircularProgress from "@mui/material/CircularProgress";

import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

function Quotes() {
  const {
    quotes,
    searchByAuthorName,
    quotesByAuthor,
    fetchData,
    setLoading,
    loading,
    fetQuotes,
    saveQuote,
    saveAsJson,
  } = useContext(QuotesContext);
  const [addSingle, setAddSingle] = useState(false);

  //? =>  TextFields State
  const [quoteTxt, setQuoteTxt] = useState("");
  const [quoteAuther, setQuoteAuther] = useState("");
  const [quoteCategory, SetQuoteCategory] = useState("");
  const [quoteSaveType, setQuoteSaveType] = useState("");
  const [searchVisible, setSearchVisible] = useState();
  //?: Search
  const [searchByAuthor, setSearchByAuthor] = useState();
  //?: => Adding Quotes Types
  const [addAsJson, setAddAsJson] = useState(false);
  const [subTitle, setSubTitle] = useState("Add New Single Quote");

  //?: -> Alert
  const [showSuccessAlert, setShowSuccessAlert] = useState();
  const [showErrorAlert, setShowErrorAlert] = useState();

  // console.log("You are in quotes");
  const theme = useTheme();

  const handleSearch = async () => {
    if (searchByAuthor) {
      try {
        await searchByAuthorName(searchByAuthor);
      } catch (error) {
        console.error(`Error searching by authors: ${authorsName}`);
      }
    }
  };

  const newQuotes = {
    text: quoteTxt,
    auther: quoteAuther,
    category: quoteCategory,
  };

  function handleSaveQuotes() {
    if (addSingle) {
      if (quoteTxt == "" || quoteAuther == "" || quoteCategory == "") {
        console.log("Fill all the required fields");
        setShowSuccessAlert(false);
        setShowErrorAlert(true);
      } else {
        saveQuote(newQuotes);
        console.log("Saving as Single Quote");
        setShowSuccessAlert(true);
        setShowErrorAlert(false);
      }
    } else if (addAsJson) {
      if (quoteTxt == "") {
        console.log("Fill all the required fields");
      } else {
        saveAsJson([newQuotes]);

        console.log("Svaing As json");
      }
    } else {
      console.log("Select Quote Type to Save");
      return null;
    }
  }

  useEffect(() => {
    fetQuotes();
    console.log("Data is ", quotes);
  }, []);
  useEffect(() => {
    console.log("Data is ", quotes);
    if (quoteSaveType === "Select Type" || quoteSaveType === "") {
      setAddSingle(false);
      setSearchVisible(false);
    } else if (quoteSaveType === "As Single") {
      setAddSingle(true);
      setSearchVisible(false);
    } else {
      setAddSingle(false);
      setSearchVisible(true);
    }
    console.log("Data is ", quotes);
  }, [quoteSaveType]);

  function clearTxt() {
    setQuoteTxt("");
    setQuoteAuther("");
    SetQuoteCategory();
  }

  console.log("Author in the search bar: ", searchByAuthor);

  return (
    <Box m="6.5rem 16.5rem " p="0rem 6rem " width="85%">
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
        <br />
        <Box display="flex" justifyContent="space-between" mr="3rem">
          <QuotesType
            value={quoteSaveType}
            onChange={(newValue) => setQuoteSaveType(newValue)}
          />
          {searchVisible && (
            <Box display="flex" gap="10px" alignItems="center">
              <TextField
                id="outlined-basic"
                label="Search by author..."
                variant="outlined"
                sx={{ width: "90%" }}
                value={searchByAuthor}
                onChange={(e) => setSearchByAuthor(e.target.value)}
              />

              <Button
                variant="contained"
                sx={{ p: "14px", m: "4px" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          )}
        </Box>
        <br />
        {quoteSaveType === "Select Type" ? (
          <>
            <div></div>
          </>
        ) : quoteSaveType === "As Single" ? (
          <>
            <TextField
              id="outlined-basic"
              label="Auther"
              variant="outlined"
              sx={{ width: "30%" }}
              value={quoteAuther}
              onChange={(e) => setQuoteAuther(e.target.value)}
            />
            {/* <Form >
              <form>
                <FormField
                  
                  name="Author Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author....</FormLabel>
                      <FormControl>
                        <Input placeholder="Author's Name..."/>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form> */}
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
        ) : quoteSaveType === "Quotes" ? (
          <>
            <Box
              display="flex"
              height="100%"
              flexWrap="wrap"
              gap={2}
              paddingBottom="200px"
            >
              {(searchByAuthor ? quotesByAuthor : quotes).map(
                (quote, index) => (
                  <div key={index}>
                    {quotes === null ? (
                      <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                      </Box>
                    ) : (
                      <QuoteCard
                        data={quote.text}
                        author={quote.auther}
                        id={quote._id}
                        category={quote.category}
                      />
                    )}
                  </div>
                )
              )}
            </Box>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
        <br />
        <br />

        {quoteSaveType === "As Single" || quoteSaveType === "As Json" ? (
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
              handleSaveQuotes();
              // addSingle ?  saveQuote(newQuotes) : null
              // clearTxt();
            }}
          >
            Save Quotes
          </Button>
        ) : (
          <>
            <div></div>
          </>
        )}
        {showSuccessAlert && (
          <CustomizedSnackbars
            type="success"
            message="Successfully saved quotes"
          />
        )}

        {showErrorAlert && (
          <CustomizedSnackbars
            type="error"
            message=" Error fill all the requires blank spaces."
          />
        )}
      </Box>
    </Box>
  );
}

export default Quotes;
