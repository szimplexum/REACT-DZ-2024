import { useRef } from "react";

function ScrollToElement() {
    const divRef = useRef(null);

    const scrollToDiv = () => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <button onClick={scrollToDiv}>Scroll to element</button>
            <div style={{ height: "140vh" }}></div>
            <div ref={divRef}>Target element</div>
        </div>
    );
}

export default ScrollToElement;
