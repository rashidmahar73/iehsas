import { Carousel, SlideControl } from "../../components";
import { useSlideControls } from "../../hooks";
import { Card } from "./card";
import { listItems } from "./helpers";

function Services() {
  const { currentIndex, slidesPerPage, setCurrentIndex } = useSlideControls({
    mdCount: 1,
    lgCount: 6,
  });
  return (
    <div>
      <Carousel />
      <div className="my-[40px] relative">
        <SlideControl
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          slides={listItems}
        />
        <div className="grid sm:grid grid-cols-1 md:grid-cols-3 grid-cols-3 mx-10">
          {listItems
            ?.slice(currentIndex, currentIndex + slidesPerPage)
            ?.map((elem) => (
              <Card />
            ))}
        </div>
      </div>
    </div>
  );
}

export { Services };
