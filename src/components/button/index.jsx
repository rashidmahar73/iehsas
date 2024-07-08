
function Button({ children, className = "", onClick = () => {} }) {
  return (
    <button
      type="button"
      className={
        className
          ? className
          : "relative rounded-md p-2 text-gray-400 hover:text-white focus:outline-none h-[45px] w-[45px] "
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Button };
