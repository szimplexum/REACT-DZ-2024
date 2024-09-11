import { useState } from "react";

function ImageCatalogBonus({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (images.length === 0) {
        return <h3>Gallery is empty</h3>;
    }

    const handleForwardClick = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const handleBackwardClick = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(images.length - 1);
        }
    };

    return (
        <div>
            <img src={images[currentImageIndex]} />
            <div>
                <button onClick={handleBackwardClick}>⏪</button>
                <button onClick={handleForwardClick}>⏩</button>
            </div>
        </div>
    );
}

export default ImageCatalogBonus;
