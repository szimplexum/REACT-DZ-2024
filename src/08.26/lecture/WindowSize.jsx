import { useState, useEffect } from "react";

function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
}

export default WindowSize;
