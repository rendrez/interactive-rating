export default function Card({ children, itemsAlign }) {
  return (
    <div
      className={`bg-darkBlue w-[90vw] sm:w-[50vw] md:w-[30vw] font-overpass flex flex-col ${itemsAlign} justify-center p-5 rounded-3xl gap-7 py-7`}
    >
      {children}
    </div>
  );
}

function Icon({ src }) {
  return (
    <div className="bg-mediumGrey p-3 flex items-center justify-center rounded-full">
      <img src={src} alt="icon star" width={16} height={16} />
    </div>
  );
}

function Title({ title }) {
  return <h1 className="text-white font-bold text-3xl">{title}</h1>;
}

function Description({ children, className }) {
  return (
    <p className={`text-lightGrey font-normal ${className}`}>{children}</p>
  );
}

function Option({ options, onClick }) {
  const option = [...options];
  return (
    <div className="flex flex-row gap-3 w-full justify-between">
      {option.map((i, key) => (
        <button
          key={key}
          className="bg-mediumGrey rounded-full flex items-center justify-center w-12 h-12 font-bold text-lightGrey text-base hover:bg-orange hover:text-white active:text-white active:bg-lightGrey focus:text-white focus:bg-lightGrey"
          value={i}
          onClick={onClick}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

function Button({ text, onClick }) {
  return (
    <button
      className="flex self-center justify-center items-center text-base hover:text-orange hover:bg-white bg-orange text-white w-full rounded-full py-2 uppercase font-normal tracking-widest"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function Body({ children, className }) {
  return <div className={`flex flex-col gap-1 ${className}`}>{children}</div>;
}

Card.Icon = Icon;
Card.Title = Title;
Card.Description = Description;
Card.Option = Option;
Card.Button = Button;
Card.Body = Body;
