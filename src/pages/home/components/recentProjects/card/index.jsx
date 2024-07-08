function Card({ animationId, imgSrc, text }) {
  function handleFocus() {
    document.getElementById(animationId).style.backgroundColor =
      "rgba(0, 0, 0, 0.8)";
  }
  function handleLeave() {
    document.getElementById(animationId).style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }
  return (
    <div
      id={animationId}
      className="w-full h-[300px] bg-no-repeat bg-cover bg-blend-darken"
      style={{
        backgroundImage: `url('${imgSrc}')`,
        transition: "background-color 0.5s ease", 
      }}
      onMouseEnter={handleFocus}
      onMouseLeave={handleLeave}
    >
      <div className="h-full w-full">
        <div className="flex justify-end items-end">
          <div className="w-[30px] h-[30px] bg-[#ff0000]" />
        </div>
        <div className="flex flex-col justify-center h-full w-full">
          <h2 className="text-white font-bold text-[20px] text-center cursor-pointer">
            {text.heading}
          </h2>
          <div className="flex ml-3">
            <span className="text-black p-2 bg-[#ff0000] text-[11px]">
              {text.subHead}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Card };
