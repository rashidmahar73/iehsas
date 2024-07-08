import { Carousel } from "../../components";
import { faqsItems } from "./helpers";
import { FAQSList } from "./faqsItems";

function FAQ() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-2">
        <div className="mx-20">
          <h1 className="text-[30px] font-bold mb-[15px]">
            CONSTRUCTION GENERAL
          </h1>
          <FAQSList items={faqsItems} />
          <h1 className="text-[30px] font-bold mb-[15px]">SAFETY</h1>
          <FAQSList items={faqsItems} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export { FAQ };
