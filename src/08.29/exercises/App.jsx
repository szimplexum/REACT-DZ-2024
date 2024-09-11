import AuthStatus from "./AuthStatus.jsx";
import AuthProvider from "./AuthProvider.jsx";
import AuthButton from "./AuthButton.jsx";

function App() {
    return (
        <AuthProvider>
            <AuthStatus />
            <AuthButton />
        </AuthProvider>
    );
}

export default App;
