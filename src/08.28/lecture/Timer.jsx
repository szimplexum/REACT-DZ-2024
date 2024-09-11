import { useState, useEffect, useRef } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            console.log("tick", count);
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId.current);
        };
    }, []);

    const handleStop = () => {
        clearInterval(intervalId.current);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Timer;
