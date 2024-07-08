function Card({elem, animationId}) {
  function handleEnter() {
    document.getElementById(animationId).style.height = "100%";
  }
  function handleLeave() {
    document.getElementById(animationId).style.height = "";
  }
  return (
    <div
      className="flex flex-col justify-end items-center h-[300px] w-full relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        backgroundImage: "url('/assets/images/dummy.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        id={animationId}
        className="bg-[#00000080] py-5 w-full h-[10%] pl-5 bottom-0 absolute flex flex-col justify-center"
      >
        <h1 className="text-white font-bold text-[20px] m-0 cursor-pointer">
          {elem.heading}
        </h1>
        <h2 className="text-white text-[15px] m-0">Chief Operating Officer</h2>
        <h3 className="text-white text-[15px] m-0">Description</h3>
        <div className="flex"><div/></div>
      </div>
    </div>
  );
}
export { Card };
