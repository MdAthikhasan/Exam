import React, { createContext, useState } from "react";

export const MyContext = createContext();
const Context = ({ children }) => {
  const [ id, setId] = useState([]);
  const handleFavourite = (serverId) => {
    setId([...id, serverId]);
  };
  let obj = {
    handleFavourite,
    id,
    setId,
  };
  // console.log(data)
  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
};

export default Context;
