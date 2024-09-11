import { useState } from "react";
import { shortenText } from "./helpers.js";

function LongText2({ text, wordLimit }) {
    const [isOpen, setIsOpen] = useState(false);
    const [textToDisplay, setTextToDisplay] = useState(
        shortenText(text, wordLimit)
    );
    const [ctaText, setCtaText] = useState("Read more");

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setTextToDisplay(isOpen ? shortenText(text, wordLimit) : text);
        setCtaText(isOpen ? "Read more" : "Show less");
    };

    return (
        <div>
            <p>{textToDisplay}</p>
            <a onClick={toggleOpen}>{ctaText}</a>
        </div>
    );
}

export default LongText2;
