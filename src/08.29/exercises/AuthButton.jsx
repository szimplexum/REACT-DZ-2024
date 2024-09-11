import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";

function AuthButton() {
    const { isLoggedIn, logout, login } = useContext(AuthContext);

    const handleAuth = () => {
        if (isLoggedIn) {
            logout();
        } else {
            login();
        }
    };

    return (
        <button onClick={handleAuth}>{isLoggedIn ? "Logout" : "Login"}</button>
    );
}

export default AuthButton;
