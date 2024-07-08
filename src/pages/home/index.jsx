import { Button, Carousel } from "../../components";
import {
  AboutUs,
  HappyClients,
  RecentProjects,
  Specialist,
} from "./components";
import { Testimonials } from "../../components";
import { Stats } from "../../components";
import { slides } from "./helper";

function Home() {
  return (
    <>
      <div className="relative">
        <Carousel items={slides} />
        <div className="mt-[-40px] w-full absolute flex rounded-sm">
          <div className="flex justify-between w-full xs:mx-5 sm:mx-5 md:mx-20 lg:mx-20 bg-[#ff0000] p-6">
            <h1 className="text-white text-[1rem] font-bold">
              WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
            </h1>
            <Button className="cursor-pointer  text-[1rem] flex justify-center bg-black text-white rounded-[5px] items-center p-2">
              REQUEST QUOTE
            </Button>
          </div>
        </div>
      </div>
      <AboutUs />
      <Stats />
      <Specialist />
      <RecentProjects />
      <Testimonials heading="TESTIMONIALS" />
      <HappyClients />
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 my-[40px]">
        <div className="bg-[#1b036e] flex flex-col items-center p-4">
          <h1 className="m-0 text-black text-[20px] font-bold">CAN WE HELP</h1>
          <h2 className="text-white text-[20px] font-bold m-0">
            (+9) 847-291-4353
          </h2>
        </div>
        <div className="px-10 flex justify-between items-center bg-[#252525]">
          <div>
            <h3 className="m-0 text-white text-[17px] font-bold">
              NEWSLETTER SIGN-UP
            </h3>
            <p className="m-0 text-white text-[15px]">
              Latest updates and news
            </p>
          </div>
          <div>inputfield</div>
        </div>
      </div>
    </>
  );
}

export { Home };
