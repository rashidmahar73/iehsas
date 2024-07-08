function Card({ elem }) {
  return (
    <div className="flex flex-col">
      <div className="h-[300px] w-[260px] bg-black" />
      <h1 className="text-[20px] font-bold m-0">{elem.name}</h1>
      <h2 className="text-[13px] font-bold m-0">Chief Operating Officer</h2>
      <p className="text-[15px]  m-0">
        Nats Stenman began his career in construction with boots on the ground
      </p>
      <div className="flex">
        <div
          style={{ width: "20px", height: "20px", backgroundColor: "black" }}
        />
        <div
          style={{ width: "20px", height: "20px", backgroundColor: "black" }}
        />
        <div
          style={{ width: "20px", height: "20px", backgroundColor: "black" }}
        />
        <div
          style={{ width: "20px", height: "20px", backgroundColor: "black" }}
        />
      </div>
    </div>
  );
}

export { Card };
