import { useEffect, useState } from "react";

import { ConditionalRenderer } from "../conditionalRenderer";

function CollapseBar({
  children = null,
  heading = "",
  isOpenCall = () => {},
  isCurrent = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isCurrent);
  }, [isCurrent]);

  function onClickHandler() {
    isOpenCall();
  }
  return (
    <>
      <div
        className="bg-[#E5E5E5] px-3 rounded-[5px] h-[46px] flex justify-between items-center cursor-pointer mt-2"
        onClick={() => {
          onClickHandler();
        }}
      >
        <h1 className="text-[16px] leading-[19.5px] font-semibold">
          {heading}
        </h1>
        <div
          className={
            isCurrent && isOpen
              ? "rotate-180 transition ease-in-out delay-200"
              : "rotate-0 transition ease-in-out delay-200"
          }
        ></div>
      </div>

      <ConditionalRenderer condition={isOpen}>{children}</ConditionalRenderer>
    </>
  );
}
export { CollapseBar };
