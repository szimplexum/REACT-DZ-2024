import { useRef } from "react";

function Form() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </>
    );
}

export default Form;
