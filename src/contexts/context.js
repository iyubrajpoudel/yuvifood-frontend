"use client"

import { createContext, useContext, useState } from "react";

// creating context
export const MyContext = createContext();

export const MyContextProvider = ({children}) => {

    //state to access and set datas
    const [foods, setFoods] = useState([]);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("all");

    return (
        <MyContext.Provider value={{foods, setFoods, query, setQuery, filter, setFilter}}>
            {children}
        </MyContext.Provider>
    )
}

// custom hook for using MyContext
export const useMyContext = () => useContext(MyContext);
