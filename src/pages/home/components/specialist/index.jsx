function Specialist() {
  return (
    <>
      <div className="mt-[40px] flex flex-col items-center">
        <h2 className="text-[16px]">WE ARE SPECIALISTS IN</h2>
        <h1 className="text-[30px] font-bold">WHAT WE DO</h1>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 grid-cols-3 mt-[40px] xs:px-5 sm:px-5 md:px-20 lg:px-20">
        <div>
          <div className="flex">
            <h1>Image</h1>
            <div className="flex flex-col">
              <h3 className="text-[15px] font-bold">HOME CONSTRUCTION</h3>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div className="flex">
            <h1>Image</h1>
            <div className="flex flex-col">
              <h3 className="text-[15px] font-bold">HOME CONSTRUCTION</h3>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Specialist };
