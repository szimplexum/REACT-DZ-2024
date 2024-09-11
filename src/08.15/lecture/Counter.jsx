import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const handleIncrementClick = () => {
        setNumber(number + 1);
    };

    const handleDecrementClick = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </div>
    );
}

export default Counter;
