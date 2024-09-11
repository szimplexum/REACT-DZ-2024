import { useContext } from "react";
import ThemeContext from "./ThemeContext.js";

function ThemeSwitcher() {
    const contextValue = useContext(ThemeContext);

    const toggleTheme = () => {
        contextValue.toggleTheme(contextValue.theme === "red" ? "blue" : "red");
    };

    return (
        <div>
            <p>Aktuális téma: {contextValue.theme}</p>
            <button onClick={toggleTheme}>Téma váltása</button>
        </div>
    );
}

export default ThemeSwitcher;
