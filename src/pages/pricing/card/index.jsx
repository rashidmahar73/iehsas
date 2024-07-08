import { Button } from "../../../components";

function Card() {
  return (
    <div>
      <h1 className="text-[30px] font-bold">BUILDING REMODELS</h1>
      <h1 className="text-[30px] font-bold">
        $89.9<span className="font-semibold">/MONTH</span>
      </h1>
      <p className="text-[15px] mt-[20px] leading-9">
        Project Management for Owners Pre-construction feasibility On-site
        representation Quality control inspections Schedule claim
        preparation/defense Project phasing development
      </p>
      <Button className="p-2 bg-[#006ab3] font-bold mt-[20px] text-white">ORDER NOW</Button>
    </div>
  );
}
export { Card };
