import { useContext } from "react";
import ThemeContext from "./ThemeContext.js";

function ReadMoreButton() {
    const contextValue = useContext(ThemeContext);

    return (
        <button style={{ backgroundColor: contextValue.theme }}>
            Read more
        </button>
    );
}

export default ReadMoreButton;
