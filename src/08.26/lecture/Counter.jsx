import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    useEffect(() => {
        console.log("every render");
    });

    useEffect(() => {
        console.log("number2 render");
    }, [number2]);

    useEffect(() => {
        console.log("first render");

        return () => {
            console.log("unmount");
        };
    }, []);

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button>

            <h1>Number 2: {number2}</h1>
            <button onClick={() => setNumber2(number2 + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
