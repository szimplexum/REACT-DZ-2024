import { useContext } from "react";
import LanguageContext from "./LanguageContext";

function LanguageSwitcher() {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <button onClick={toggleLanguage}>
            {language === "en" ? "Váltás magyarra" : "Switch to English"}
        </button>
    );
}

export default LanguageSwitcher;
