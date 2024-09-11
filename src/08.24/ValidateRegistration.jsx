import { useState } from "react";

function ValidateRegistration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [feedbackMode, setFeedbackMode] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmationChange = (event) => {
        setPasswordConfirmation(event.target.value);
    };

    const handleValidation = () => {
        if (username == "" || password == "" || passwordConfirmation == "") {
            setFeedbackMode("empty");
        } else if (password !== passwordConfirmation) {
            setFeedbackMode("password-error");
        } else {
            setFeedbackMode("success");
        }
    };

    let feedbackMessage;

    switch (feedbackMode) {
        case "success":
            feedbackMessage = (
                <p style={{ color: "green" }}>Registration successful</p>
            );
            break;
        case "password-error":
            feedbackMessage = (
                <p style={{ color: "red" }}>Passwords don't match</p>
            );
            break;
        case "empty":
            feedbackMessage = (
                <p style={{ color: "red" }}>
                    None of the inputs should be empty
                </p>
            );
            break;
    }

    return (
        <div className="validate-registration">
            <h2>ValidateRegistration</h2>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <input
                type="password"
                placeholder="password confirmation"
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange}
            />
            <button onClick={handleValidation}>Validate</button>
            {feedbackMessage}
        </div>
    );
}

export default ValidateRegistration;
