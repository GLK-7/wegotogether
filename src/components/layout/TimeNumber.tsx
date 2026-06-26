interface Props {
  title: string;
  number: number;
}

const TimeNumber = ({ title, number }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Number box */}
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-500 to-pink-500 blur-md opacity-30" />
        <div className="relative glass-card rounded-xl px-4 sm:px-6 py-4 sm:py-5 min-w-[64px] sm:min-w-[80px] flex items-center justify-center border border-white/10">
          <span
            className="text-3xl sm:text-5xl md:text-6xl font-bold gradient-text tabular-nums"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {String(number).padStart(2, '0')}
          </span>
        </div>
      </div>
      {/* Label */}
      <span className="text-xs sm:text-sm text-pink-300/70 font-medium uppercase tracking-widest">
        {title}
      </span>
    </div>
  );
};

export default TimeNumber;
