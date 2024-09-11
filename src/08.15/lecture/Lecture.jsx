import Counter from "./Counter.jsx";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({ name: "John Doe", age: 30 });
    const [name, setName] = useState("");

    const handleClick = () => {
        setUser({ ...user, age: user.age + 1 });
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
            />
            <Counter />
            <Counter />
            <div>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <button onClick={handleClick}>Happy birthday!</button>
            </div>
        </>
    );
}

export default App;
