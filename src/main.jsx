import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import QuotesContextProvider from "./Backend/Context/QuotesContext";
import Navbar from "./compos/Navbar.jsx";
import QuoteCard from "./compos/quoteCard.jsx";
import AlertDialog from "./compos/alertDialog.jsx";
import Signin from "./views/signin/index.jsx";
import { AuthProvider } from "./Backend/Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <QuotesContextProvider>
        <App />
      </QuotesContextProvider>
    </AuthProvider>
  </>
);
