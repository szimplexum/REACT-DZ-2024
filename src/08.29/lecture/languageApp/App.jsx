import Greeting from "./Greeting.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import LanguageProvider from "./LanguageProvider.jsx";

function App() {
    return (
        <LanguageProvider>
            <div>
                <Greeting />
                <LanguageSwitcher />
            </div>
        </LanguageProvider>
    );
}

export default App;
