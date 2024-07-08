import { useState } from "react";
import { Button } from "../../../../components";
import { arry, tabsBtns } from "./helper";
import { Card } from "./card";

function RecentProjects() {
  const [currentClicked, setCurrentClicked] = useState(0);

  function tabsHandler(key) {
    setCurrentClicked(key);
  }

  return (
    <div>
      <div className="mt-[40px] flex flex-col items-center">
        <h2 className="text-[16px]">WORK FOR EXCELLENCE</h2>
        <h1 className="text-[30px] font-bold">RECENT PROJECTS</h1>
      </div>
      <div className="grid xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xs:px-10 lg:px-20">
        {tabsBtns?.map(({ text, key }) => {
          return (
            <div key={`tabs-btns-${key}`} className="px-1">
              <Button
                className={`${
                  currentClicked === key
                    ? "bg-[#ff0000] text-white"
                    : "bg-white text-black"
                } p-5 border-black border-b-[3px] rounded-[1px]`}
                onClick={() => tabsHandler(key)}
              >
                {text}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xs:px-10 lg:px-20 mt-[20px]">
        {arry?.[currentClicked]?.map(({ text }, index) => (
          <div className="mx-1 my-1">
            <Card
              key={`projectCard-${index}`}
              animationId={`project-card-${index?.toString()}`}
              imgSrc="/assets/images/project1.jpg"
              text={{
                heading: text,
                subHead: text,
              }}
            />
          </div>
        ))}
      </div>
      <div className="w-full xs:px-10 lg:px-20">
        <div className="flex justify-center mt-[20px]">
          <Button className="bg-[#006ab3] p-2">VIEW ALL PROJECTS</Button>
        </div>
      </div>
    </div>
  );
}

export { RecentProjects };
