import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import QuotesContextProvider from './Backend/Context/QuotesContext';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <>

    <QuotesContextProvider>
    
        {/* <Navbar /> */}
        <App />
    </QuotesContextProvider>
   </>
    
  
);
