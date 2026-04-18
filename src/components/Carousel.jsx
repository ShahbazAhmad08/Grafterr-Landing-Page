import { useState } from "react";
import useCarousel from "../hooks/useCarousel";

function Carousel({ items, renderItem, config }) {
  const { currentIndex, itemsPerView, next, prev, canGoPrev, canGoNext } = useCarousel(items.length, config);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoNext) {
      next();
    }
    if (isRightSwipe && canGoPrev) {
      prev();
    }
  };

  const itemWidth = 100 / itemsPerView;

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="carousel-track" 
          style={{ 
            transform: `translateX(-${currentIndex * itemWidth}%)`,
            transition: 'transform 300ms ease-in-out'
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="carousel-slide" 
              style={{ flex: `0 0 ${itemWidth}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      
      {config.showArrows && (
        <div className="carousel-controls">
          <button 
            className="carousel-btn" 
            onClick={prev} 
            disabled={!canGoPrev}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            className="carousel-btn" 
            onClick={next} 
            disabled={!canGoNext}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default Carousel;
