import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("tick", count);
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <h1>{count}</h1>;
}

export default Timer;
