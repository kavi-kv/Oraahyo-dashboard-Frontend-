import React, { useState, createContext } from "react";
import axios from "axios";

export const NoticeContext = createContext();

function NoticeContextProvider({ children }) {
  const [notices, setNotices] = useState([]);
  const [activeNotices, setActiveNotices] = useState([]);
  const [loading, setLaoding] = useState(true);

  async function fetchActive() {
    try {
      setLaoding(true);
      var response = await axios.get(`http://localhost:5005/notice/active`);
      setActiveNotices(response.data);
      console.log(`Inside fetch in active notice: ${response.data}`)
      setLaoding(false);
    } catch (error) {
      console.log(`Error: ${error}`);
      throw error;
    }
  }

  const addNotice = async (noticeData) => {
    try {
      setLaoding(true);
      var response = await axios.post(
        "http://localhost:5005/addNotice",
        noticeData
      );
      if(response.status != 201){
         return console.log("Error on adding a new notice")
      }
     
      return response.data;
    } catch (error) {
      console.log(`Error on adding notice: ${error}`);
      throw error;
    }
  };

  return (
    <NoticeContext.Provider value={{ fetchActive, activeNotices, notices,addNotice,loading }}>
      {children}
    </NoticeContext.Provider>
  );
}

export default NoticeContextProvider;
