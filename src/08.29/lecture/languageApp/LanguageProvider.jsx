import { useState } from "react";
import LanguageContext from "./LanguageContext.js";

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "hu" : "en");
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
