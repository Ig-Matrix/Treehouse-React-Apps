 import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const [accentColor, setAccentColor] = useState("#63537d");
   const [fontPercentage, setFontPercentage] = useState(100);

   useEffect(() => {
      if (isDarkMode) {
         document.body.classList.add("dark");
      } else {
         document.body.classList.remove("dark");
      }
      document.body.style.fontSize = `${fontPercentage}%`;
   }, [isDarkMode, fontPercentage]);

   const toggleDarkMode = () => {
      setIsDarkMode((currentMode) => !currentMode);
   };
   return (
      <ThemeContext.Provider
         value={{
            isDarkMode,
            accentColor,
            fontPercentage,
            actions: {
               toggleDarkMode,
               updateFontPercentage: setFontPercentage,
               updateAccentColor: setAccentColor,
            },
         }}
      >
         {props.children}
      </ThemeContext.Provider>
   );
};

export default ThemeContext;
