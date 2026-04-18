import { useState, useEffect, useCallback } from 'react';

export default function useCarousel(itemsCount, config) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(config.desktop);

  const updateItemsPerView = useCallback(() => {
    if (window.innerWidth < 768) {
      setItemsPerView(config.mobile);
    } else if (window.innerWidth < 1024) {
      setItemsPerView(config.tablet);
    } else {
      setItemsPerView(config.desktop);
    }
  }, [config]);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [updateItemsPerView]);

  const maxIndex = Math.max(0, itemsCount - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return { currentIndex, itemsPerView, next, prev, canGoPrev, canGoNext };
}
