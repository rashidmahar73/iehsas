import { Carousel } from "../../components";
import { faqsItems } from "./helpers";
import { FAQSList } from "./faqsItems";

function FAQ() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-3 my-10">
        <div className="mx-20 col-span-2">
          <h1 className="text-[30px] font-bold mb-[15px]">
            CONSTRUCTION GENERAL
          </h1>
          <FAQSList items={faqsItems} />
          <h1 className="text-[30px] mt-[20px] font-bold mb-[15px]">SAFETY</h1>
          <FAQSList items={faqsItems} />
        </div>
        <div className="mr-10">
          <div className="flex mb-5">
            <div className="h-[25px] w-[5px] bg-black" />
            <h1 className="text-[20px] font-bold m-0">RECENT POSTS</h1>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-[90px] w-[90px] bg-black" />
            <h3 className="text-[15px] m-0">
              We Just Completes $17.6 Million Medical Clinic In Mid-missouri
            </h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export { FAQ };
