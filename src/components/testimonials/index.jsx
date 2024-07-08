import { Card, SlideControl } from "..";
import { count, testimonialsCards } from "./helpers";
import { useSlideControls } from "../../hooks";

function Testimonials({ heading = "" }) {
  const { currentIndex, slidesPerPage, setCurrentIndex } =
    useSlideControls(count);

  return (
    <div>
      <div className="mt-[20px] relative">
        <h1 className="text-center text-[30px] font-bold mb-[15px]">
          {heading}
        </h1>
        <div>
          <SlideControl
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            slides={testimonialsCards}
          />
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xs:mx-20 sm:mx-5 md:mx-20 lg:mx-20">
          {testimonialsCards
            ?.slice(currentIndex, currentIndex + slidesPerPage)
            ?.map((elem, index) => (
              <Card key={`testimonial-card-${index}`} elem={elem} />
            ))}
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
