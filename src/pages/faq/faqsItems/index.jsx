import { useState } from "react";
import { CollapseBar } from "../../../components";

function FAQSList({ items }) {
  const [currentSelected, setCurrentSelected] = useState(null);

  function onClickHandler(index) {
    if (currentSelected === index) return setCurrentSelected(null);

    setCurrentSelected(index);
  }
  return (
    <div>
      {items?.map((elem, index) => (
        <CollapseBar
          key={`faqs-collapse-${index}`}
          heading={elem?.heading}
          isOpenCall={() => onClickHandler(index)}
          isCurrent={currentSelected === index}
        >
          <h1>{elem?.text}</h1>
        </CollapseBar>
      ))}
    </div>
  );
}

export { FAQSList };
