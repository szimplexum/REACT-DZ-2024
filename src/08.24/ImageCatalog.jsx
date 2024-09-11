import { useState } from "react";

function ImageCatalog({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (images.length === 0) {
        return <h3>Gallery is empty</h3>;
    }

    const handleForwardClick = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handleBackwardClick = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div>
            <img src={images[currentImageIndex]} />
            <div>
                <button
                    disabled={currentImageIndex === 0}
                    onClick={handleBackwardClick}
                >
                    ⏪
                </button>
                <button
                    disabled={currentImageIndex + 1 === images.length}
                    onClick={handleForwardClick}
                >
                    ⏩
                </button>
            </div>
        </div>
    );
}

export default ImageCatalog;
