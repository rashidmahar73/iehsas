import { Carousel, SlideControl } from "../../components";
import { Stats } from "../../components";
import { Card } from "./card";
import { count, slidesItems } from "./helper";
import { useSlideControls } from "../../hooks";

function AboutUs() {
  const { currentIndex, slidesPerPage, setCurrentIndex } =
    useSlideControls(count);

  return (
    <div>
      <Carousel />
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 xs:px-[20px] sm:px-[20px] md:px-[20px] lg:px-[60px] my-[40px]">
        <div className="xs:px-[20px] sm:px-[20px] md:px-[20px] lg:px-[50px]">
          <h1 className="text-[20px] font-bold m-0 text-[#010757] text-center pb-[20px]">
            WHO WE ARE
          </h1>
          <h2 className="text-[12PX] m-0 text-center pb-[20px]">
            when Gregor Samsa woke from troubled dreams, he found himself
            transformed in his bed into a horrible vermin.
          </h2>
          <h3 className="text-[12PX] m-0 text-center pb-[20px]">
            Semporibus autem quibusdam et aut officiis debitis aut rerum est aut
            optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere
            ut
          </h3>
          <h4 className="text-[12PX] m-0 text-center pb-[20px]">
            He lay on his armour-like back, and if he lifted. ultrices ultrices
            sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn’t anything embarrassing.
          </h4>
        </div>
        <div className="relative">
          <div>
            <SlideControl
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              slides={slidesItems}
            />
          </div>
          {[slidesItems?.[currentIndex]]?.map((elem, index) => (
            <div
              key={`slides-items-${index}`}
              className="hs-carousel-slide flex justify-center h-full py-20 dark:bg-neutral-900"
              style={{
                backgroundImage: `url(${elem.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col justify-center h-full w-full">
                <h2 className="text-white font-bold text-[20px] text-center cursor-pointer">
                  {elem.heading}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Stats />
      <div className="my-[40px] flex flex-col items-center">
        <h2 className="text-[16px]">QUALITY SERVICE</h2>
        <h1 className="text-[30px] font-bold">PROFESSIONAL TEAM</h1>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-cols-4 xs:mx-5 sm:mx-5 md:mx-5 lg:mx-10">
        {slidesItems
          ?.slice(currentIndex, currentIndex + slidesPerPage)
          ?.map((elem, index) => (
            <div className="mx-2">
              <Card
                key={`people-cards-${index}`}
                animationId={`people-cards-${index}`}
                elem={elem}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-[35px]">
        <div className="relative xs:w-[35%] sm:w-[20%] md:w-[15%] lg:w-[12%]">
          <div>
            <SlideControl
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              slides={slidesItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
