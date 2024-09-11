import { useState } from "react";

function MyForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayedUsername, setDisplayedUsername] = useState("");
    const [displayedPassword, setDisplayedPassword] = useState("");
    const [shouldShowValues, setShouldShowValues] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSend = () => {
        setDisplayedUsername(username);
        setDisplayedPassword(password);
        setUsername("");
        setPassword("");
        setShouldShowValues(true);
    };

    return (
        <div>
            <h2>MyForm</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={handleSend}>Send</button>
            {shouldShowValues && (
                <>
                    <h1>Username: {displayedUsername}</h1>
                    <h1>Password: {displayedPassword}</h1>
                </>
            )}
        </div>
    );
}

export default MyForm;
