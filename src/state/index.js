import React, { createContext, useContext, useReducer } from "react";

// Create a context for the global state
const GlobalContext = createContext();

// Define the initial state
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

// Define the reducer function
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// Create a custom hook to access the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Create the GlobalProvider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
