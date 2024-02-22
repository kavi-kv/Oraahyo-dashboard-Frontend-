import React, { useState, useContext, createContext, useEffect } from "react";
import { api } from "../../state/api";
import axios from "axios";
import { FunctionsRounded } from "@mui/icons-material";

export const QuotesContext = createContext();

function QuotesContextProvider(props) {
  const [quotes, setQuotes] = useState([]);
  const [quotesByAuthor, setQuotesByAuthor] = useState([]);
  const [addQuote, setAddQuote] = useState({});
  var [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      // setLoading = true
      const response = await axios.get("http://localhost:5005/xikmado/quotes");
      setQuotes(response.data);
      // return response.data;
    } catch (err) {
      console.log("Error fetching quotes ", err);
      throw err;
    }
  }
  async function deleteQuote(_id) {
    try {
      const response = await axios.post(
        `http://localhost:5005/xikmado/delete/${_id}`
      );
      console.log(`Deleted Quote with ID: ${_id}`);
      return response;
    } catch (error) {
      console.log(`Error for deleting ID: ${_id}: Error: ${error}`);
    }
  }
  async function saveQuote(quoteData) {
    try {
      console.log("Inside Save Quote function");
      const response = await axios.post(
        "http://localhost:5005/xikmado/addQuotes",
        quoteData
      );
      const addedQuote = response.data;
      // setAddQuote([...addQuote,addedQuote]);
      console.log("under Save Quote function");
      console.log("Added Quotes", addedQuote);
    } catch (err) {
      console.log(`Error saving quote ${err}`);
    }
  }

  async function searchByAuthorName(authorName) {
    try {
      const response = await axios.get(
        `http://localhost:5005/xikmado/byAuther/${authorName}`
      );
      setQuotesByAuthor(response.data);
      return response.data
    } catch (error) {
      console.log(`Error on searching by author: ${error}`);
    }
  }

  async function updateQuoteData(_id, quoteData) {
    try {
      const response = await axios.put(
        `http://localhost:5005/xikmado/updateQuotes/${_id}`,
        quoteData
      );
      console.log(`Quote with ID: ${_id} is succesfully updated`);
      return response;
    } catch (error) {
      console.log(`Error updating quote: ${error}`);
    }
  }

  async function saveAsJson(quotesData) {
    try {
      const response = await axios.post(
        "http://localhost:5005/xikmado/addManyQuotes",
        quotesData
      );
      const addedQuotes = response.data;
      console.log(`Added Quotes As Json ${addedQuotes}`);
    } catch (err) {
      console.log("There is an error: ", err);
    }
  }

  function fetQuotes() {
    fetchData();
  }
  // function fetchByAuthor() {
  //   fetchByAuthor();
  // }

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        fetchData,
        loading,
        setLoading,
        fetQuotes,
        saveQuote,
        saveAsJson,
        deleteQuote,
        updateQuoteData,
        quotesByAuthor,
        searchByAuthorName
      }}
    >
      {props.children}
    </QuotesContext.Provider>
  );
}

export default QuotesContextProvider;
