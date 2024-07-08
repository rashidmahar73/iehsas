import { Button } from "../../../components";

function Card() {
  return (
    <div className="flex flex-col mx-5">
      <div className="h-[250px] bg-black" />
      <div className="flex">
        <div className="h-[60px] w-[60px] bg-black" />
        <div className="flex flex-col">
          <h1 className="text-[18px] font-bold">ZERO HARM EVERYDAY</h1>
          <h2>
            You have ideas, goals, and dreams. We have a culturally diverse,
            forward thinking team looking for talent like. Lorem ipsum dolor
            suscipit.
          </h2>
          <Button className="p-2 w-[100px] h-[10px]">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export { Card };
