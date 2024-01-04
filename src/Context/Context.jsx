import React, { createContext, useState } from "react";

export const MyContext = createContext();
const Context = ({ children }) => {
  const [id, setId] = useState([]);
  const [searchVale, setSearchVale] = useState("");
  const [Edit, setEdit] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  // const handleFavourite = (serverId) => {
  //   setId([...id, serverId]);
  // };
 
  let obj = {
    setIsEdit,
    isEdit,
    Edit,
    setEdit,
    setSearchVale,
    searchVale,
    id,
    setId,
    isTrue,
    setIsTrue,
  };
  // console.log(data)
  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
};

export default Context;
