import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    if (!images || images.length === 0) {
        return <p>No images available</p>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Swipe gestures for mobile users
    const handlers = useSwipeable({
        onSwipedLeft: goNext,
        onSwipedRight: goPrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="slider-container" {...handlers}>
            {/* Left Arrow - Hidden if on the first image */}
            {currentIndex > 0 && (
                <button className="prev-button" onClick={goPrev}>❮</button>
            )}

            {/* Image Display (Instant Switch) */}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />

            {/* Right Arrow - Hidden if on the last image */}
            {currentIndex < images.length - 1 && (
                <button className="next-button" onClick={goNext}>❯</button>
            )}
        </div>
    );
};

export default ImageSlider;
