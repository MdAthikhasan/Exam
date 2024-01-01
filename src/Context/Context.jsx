import React, { createContext, useState } from "react";

export const MyContext = createContext();
const Context = ({ children }) => {
  const [id, setId] = useState([]);
  const [searchVale, setSearchVale] = useState("");
  const [Edit, setEdit] = useState();
    const [isEdit, setIsEdit] = useState(false);
  const handleFavourite = (serverId) => {
    setId([...id, serverId]);
  };
  console.log(searchVale);
  let obj = {
    setIsEdit,
    isEdit,
    Edit,
    setEdit,
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
