import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import QuotesContextProvider from "./Backend/Context/QuotesContext";
import Navbar from "./compos/Navbar.jsx";
import QuoteCard from "./compos/quoteCard.jsx";
import AlertDialog from "./compos/alertDialog.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  
    {/* <AlertDialog /> */}

    {/* <QuoteCard/> */}

    <QuotesContextProvider>
      <App />
    </QuotesContextProvider>
  </>
);
