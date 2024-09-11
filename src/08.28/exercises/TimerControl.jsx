import { useState, useRef } from "react";

function TimerControl() {
    const [showMessage, setShowMessage] = useState(false);
    const timerId = useRef(null);

    const handleStart = () => {
        timerId.current = setTimeout(() => {
            setShowMessage(true);
        }, 5000);
    };

    const handleStop = () => {
        clearTimeout(timerId.current);
    };

    return (
        <div>
            {showMessage && <h1>Az időzítő lejárt</h1>}
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default TimerControl;
