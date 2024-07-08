import { Carousel, SlideControl } from "../../components";
import { useSlideControls } from "../../hooks";
import { Card } from "./card";
import { count, listItems } from "./helpers";

function OurPeople() {
  const { currentIndex, slidesPerPage, setCurrentIndex } =
    useSlideControls(count);

  return (
    <div>
      <Carousel />
      <h1 className="text-[35px] font-bold text-center my-[40px]">
        OUR LEADERSHIPS
      </h1>
        <div className="my-[40px] relative">
          <SlideControl
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            slides={listItems}
          />
          <div className="grid grid-cols-4 mx-20">
            {listItems
              ?.slice(currentIndex, currentIndex + slidesPerPage)
              ?.map((elem, index) => (
                <Card key={`ourPeople-card-${index}`} elem={elem} />
              ))}
          </div>
        </div>
    </div>
  );
}
export { OurPeople };
