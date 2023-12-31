import React, { createContext } from 'react'
import { useLoaderData } from 'react-router-dom';

export const MyContext =  createContext()
const Context = ({ children }) => {
    const data = useLoaderData()

    return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
    
  
}

export default Context