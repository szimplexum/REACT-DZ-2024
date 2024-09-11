function RoleBasedMessage({ role }) {
    let message = "Welcome, Guest!";

    if (role === "admin") {
        message = "Welcome, Admin!";
    } else if (role === "user") {
        message = "Welcome, User!";
    }

    return <h3 className="role-based-message">{message}</h3>;
}

export default RoleBasedMessage;
