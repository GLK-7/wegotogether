interface Props {
  title: string;
  number: number;
}

const TimeNumber = ({ title, number }: Props) => {
  return (
    <>
      <span className="flex flex-col items-center">
        <span className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 drop-shadow-lg pt-6">
          {number}
        </span>
        <span className="text-base md:text-lg text-pink-400 font-semibold">
          {title}
        </span>
      </span>
    </>
  );
};

export default TimeNumber;
