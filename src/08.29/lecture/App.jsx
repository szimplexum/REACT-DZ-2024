import { useState } from "react";
import Posts from "./Posts.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import ThemeContext from "./ThemeContext.js";
import ReadMoreButton from "./ReadMoreButton.jsx";

function App() {
    const [theme, setTheme] = useState("red");

    const posts = [
        {
            id: 1,
            title: "Title 1",
        },
        {
            id: 2,
            title: "Title 2",
        },
        {
            id: 3,
            title: "Title 3",
        },
    ];

    const toggleTheme = (newTheme) => setTheme(newTheme);

    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ThemeSwitcher />
                <h1>Title</h1>
                <ThemeContext.Provider value={{ theme: "green", toggleTheme }}>
                    <ReadMoreButton />
                </ThemeContext.Provider>
                <Posts posts={posts} />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
