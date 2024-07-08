import { useEffect, useState } from "react";
import { slidesCount } from "../../utils/helpers";

function useSlideControls(count) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(count.lgCount);

  useEffect(() => {
    const handleResize = () => {
      slidesCount({
        setSlidesPerPage,
        currentIndex,
        setCurrentIndex,
        count: count,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { currentIndex, slidesPerPage, setCurrentIndex };
}

export { useSlideControls };
