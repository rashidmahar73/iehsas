import { Button, Carousel } from "../../components";
import { Card } from "./card";

function Pricing() {
  return (
    <div>
      <Carousel />

      <div className="p-20">
        <h1 className="text-[20px] text-center">GRAB THE PACKAGES</h1>
        <h1 className="text-[30px] font-bold text-center">PRICING</h1>
        <div className="grid grid-cols-3 mt-[30px]">
          <div className="mx-10">
            <Card />
          </div>
          <div className="mx-10">
            <Card />
          </div>
          <div className="mx-10">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
export { Pricing };
