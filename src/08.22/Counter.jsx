import { useState } from "react";

function Counter({ startValue }) {
    const [number, setNumber] = useState(startValue);

    const handleIncrement = () => {
        setNumber(number + 1);
    };

    const handleDecrement = () => {
        setNumber(number - 1);
    };

    const handleReset = () => {
        setNumber(startValue);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;
