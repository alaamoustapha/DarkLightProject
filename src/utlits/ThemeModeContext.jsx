import { createContext, useContext, useState } from "react";
import React from 'react'

export const ThemeMode =createContext();
export function ThemeModeProvider ({children}){
    const[nightMode,setnightMode]=useState(false);
    return (<ThemeMode.Provider value={{ nightMode, setnightMode }}>
        {children}
      </ThemeMode.Provider>
      );

}



