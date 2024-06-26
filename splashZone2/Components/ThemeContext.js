import React , {Children, createContext, useContext, useState} from "react";
import { Appearance, useColorScheme as useNativeColorScheme } from "react-native";


const lightTheme = {
    background: '#fff',
    text: '#000',
    container: '#f6f6f6'
}

const darkTheme ={
    background: '#161622',
    text:'#fff',
    container:''
}

const ThemeContext = createContext();

export const ThemeProvider =({children}) =>{
    const systemColorScheme = useNativeColorScheme();
    const [theme, setTheme] = useState(systemColorScheme === 'dark' ? darkTheme : lightTheme)
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    }



    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);

