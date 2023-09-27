import React, { useState, useContext, createContext,useEffect } from 'react';
import { api } from "../../state/api"
import axios  from 'axios'
export const QuotesContext = createContext();

function QuotesContextProvider(props) {
  
  const [quotes, setQuotes] = useState({});
  const [addQuote,setAddQuote] = useState({});
  const [ loading,setLoading ] = useState(true);
  

  async function fetchData(){

    try{
        const response = await axios.get("http://localhost:5005/xikmado/quotes");
        setQuotes(response.data)
        // return response.data;
    }
    catch(err) {
        console.log('Error fetching quotes ',err)
        throw err;
    }
}
async function saveQuote(quoteData){
  try{
    const response = await axios.post("http://localhost:5005/xikmado/addQuotes",quoteData);
    const addedQuote = response.data;
    // setAddQuote([...addQuote,addedQuote]);
    console.log("Added Quotes",addedQuote);
  }
  catch(err) {
    console.log(`Error saving quote ${err}`);
  }
}

function fetQuotes(){
  fetchData();
}

  return (
    <QuotesContext.Provider value={{ quotes,fetchData,loading,setLoading,fetQuotes,saveQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
}

export default QuotesContextProvider;
