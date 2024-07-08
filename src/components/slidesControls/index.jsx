import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { Button } from "../button";

function SlideControl({ slides, currentIndex, setCurrentIndex }) {
  const slideCount = slides.length;
  const showNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slideCount);
  };

  const showPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slideCount) % slideCount);
  };

  return (
    <div className="flex flex-col justify-center absolute h-full w-full top-0 ">
      <div className="flex justify-between items-center px-[10px]">
        <Button
          className="cursor-pointer flex justify-center bg-black rounded-[5px] items-center w-[46px] h-[46px]"
          onClick={showPrevSlide}
        >
          <LeftArrowIcon />
        </Button>
        <Button
          className="cursor-pointer flex justify-center bg-black rounded-[5px] items-center w-[46px] h-[46px]"
          onClick={showNextSlide}
        >
          <RightArrowIcon />
        </Button>
      </div>
    </div>
  );
}

export { SlideControl };
