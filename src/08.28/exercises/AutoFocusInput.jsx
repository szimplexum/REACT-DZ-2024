import { useEffect, useRef } from "react";

function AutoFocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <input ref={inputRef} type="text" placeholder="Type in something..." />
    );
}

export default AutoFocusInput;
