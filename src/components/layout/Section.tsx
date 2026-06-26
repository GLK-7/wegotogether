interface Props {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section = ({ title, children, id }: Props) => {
  return (
    <section className="scroll-mt-20" id={id}>
      <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
        {/* Section header */}
        <div className="px-6 pt-8 pb-6">
          <div className="flex flex-col items-center gap-3">
            <h2
              className="gradient-text text-2xl sm:text-3xl md:text-4xl font-bold text-center"
            >
              {title}
            </h2>
            {/* Ornamental divider */}
            <div className="divider-ornament w-full max-w-xs">
              <span className="text-pink-400/60 text-base">♡</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pb-8 px-4 sm:px-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
