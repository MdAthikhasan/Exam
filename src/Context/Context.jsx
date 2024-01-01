import React, { createContext, useState } from "react";

export const MyContext = createContext();
const Context = ({ children }) => {
  const [id, setId] = useState([]);
  const [searchVale, setSearchVale] = useState('');
  const handleFavourite = (serverId) => {
    setId([...id, serverId]);
  };
  console.log(searchVale);
  let obj = {
    setSearchVale,
    searchVale,
    handleFavourite,
    id,
    setId,
  };
  // console.log(data)
  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
};

export default Context;
