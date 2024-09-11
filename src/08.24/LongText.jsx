import { useState } from "react";

function LongText({ shortText, longText }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen ? (
                <>
                    <p>{longText}</p>
                    <a onClick={handleClose}>Show less</a>
                </>
            ) : (
                <>
                    <p>{shortText}</p>
                    <a onClick={handleOpen}>Read more</a>
                </>
            )}
        </div>
    );
}

export default LongText;

// import { useState } from "react";

// function LongText({ shortText, longText }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             {isOpen ? (
//                 <>
//                     <p>{longText}</p>
//                     <a onClick={toggleOpen}>Show less</a>
//                 </>
//             ) : (
//                 <>
//                     <p>{shortText}</p>
//                     <a onClick={toggleOpen}>Read more</a>
//                 </>
//             )}
//         </div>
//     );
// }

// export default LongText;

// import { useState } from "react";

// function LongText({ shortText, longText }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <p>{isOpen ? longText : shortText}</p>
//             <a onClick={toggleOpen}>{isOpen ? "Show less" : "Read more"}</a>
//         </div>
//     );
// }

// export default LongText;

// import { useState } from "react";

// function LongText({ shortText, longText }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [textToDisplay, setTextToDisplay] = useState(shortText);
//     const [ctaText, setCtaText] = useState("Read more");

//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//         setTextToDisplay(isOpen ? shortText : longText);
//         setCtaText(isOpen ? "Read more" : "Show less");
//     };

//     return (
//         <div>
//             <p>{textToDisplay}</p>
//             <a onClick={toggleOpen}>{ctaText}</a>
//         </div>
//     );
// }

// export default LongText;
