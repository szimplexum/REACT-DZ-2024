import { useEffect } from "react";

function Logger() {
    useEffect(() => {
        console.log("Mounted");
    }, []);

    return (
        <div>
            <p>Check the console</p>
        </div>
    );
}

export default Logger;
