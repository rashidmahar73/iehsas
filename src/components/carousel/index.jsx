import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { animateClass } from "./helpers";
import { SlideControl } from "../slidesControls";
import "./styles.css";

const Carousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideCount = items.length;
  const autoPlay = true; // Set to false to disable auto play

  const showNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slideCount);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(showNextSlide, 5000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  return (
    <div className="relative min-h-[74dvh]">
      <div className="hs-carousel relative overflow-hidden min-h-[74dvh] w-full bg-white">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap w-full">
          {[items?.[currentIndex]]?.map((elem, index) => (
            <div
              key={`slide-${currentIndex}`}
              className="hs-carousel-slide flex justify-center h-full py-20 dark:bg-neutral-900"
              style={{
                backgroundImage: "url('/assets/images/dummy.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col justify-center w-full">
                <span
                  key={`slide-text-${currentIndex}`}
                  className={`${animateClass(currentIndex)?.topText}
                 text-[60px] font-bold uppercase text-gray-800 dark:text-white`}
                >
                  {elem?.title}
                </span>
                <div
                  className={`flex ${animateClass(currentIndex)?.button}`}
                  key={`slide-btn-${currentIndex}`}
                >
                  {elem?.btns.map((text, index) => (
                    <div>
                      <Button
                        className={
                          index === 0
                            ? "bg-[#006ab3] text-white h-[40px] p-2 rounded-[1px]"
                            : "bg-transparent border-white border-[1px] ml-[10px] text-white h-[40px] p-2 rounded-[1px]"
                        }
                      >
                        {text}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* arrow controls */}
      <SlideControl
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        slides={items}
      />
    </div>
  );
};

export { Carousel };
