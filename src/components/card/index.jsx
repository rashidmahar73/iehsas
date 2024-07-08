function Card({elem}) {
  const { name, designation, text } = elem;

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-[140px] h-[140px] rounded-[100%]"
        style={{
          backgroundImage: `url('/assets/images/project1.jpg')`,
        }}
      />
      <h1 className="text-[25px] font-bold m-0">{name}</h1>
      <h3 className="text-[20px] font-bold m-0">{designation}</h3>
      <h4 className="text-[13px] m-0">{text}</h4>
    </div>
  );
}

export { Card };
