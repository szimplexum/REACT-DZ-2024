import { useContext } from "react";
import AuthContext from "./AuthContext.jsx";

function AuthStatus() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <h1>{isLoggedIn ? "User is logged in" : "User is not logged in"}</h1>
    );
}

export default AuthStatus;
