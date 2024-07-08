import { SlideControl } from "../../../../components";
import { count, happyClients } from "./helpers";
import { useSlideControls } from "../../../../hooks";

function HappyClients() {
  const { currentIndex, slidesPerPage, setCurrentIndex } =
    useSlideControls(count);

  return (
    <div>
      <h1 className="text-center text-[30px] font-bold my-[15px]">
        HAPPY CLIENTS
      </h1>
      <div className="mt-[20px] relative">
        <div>
          <SlideControl
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            slides={happyClients}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xs:mx-20 sm:mx-20 md:mx-20 lg:mx-20">
          {happyClients
            ?.slice(currentIndex, currentIndex + slidesPerPage)
            ?.map(({ url }, index) => (
              <div className=" flex justify-center items-center">
                <div
                  key={`happy-clients-${index}`}
                  className="w-[100px] h-[100px] rounded-[100%]"
                  style={{
                    backgroundImage: `url('${url}')`,
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export { HappyClients };
