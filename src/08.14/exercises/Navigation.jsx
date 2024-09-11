function Navigation({ role }) {
    let menuItems;

    if (role === "admin") {
        menuItems = ["Dashboard", "Users", "Settings"];
    } else if (role === "user") {
        menuItems = ["Home", "Profile", "Settings"];
    } else if (role === "guest") {
        menuItems = ["Home", "Login"];
    }

    const navItems = menuItems.map((item, index) => (
        <li className="nav-item" key={index}>
            {item}
        </li>
    ));

    return (
        <nav>
            <ul>{navItems}</ul>
        </nav>
    );
}

export default Navigation;
