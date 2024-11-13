interface Props {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section = ({ title, children, id }: Props) => {
  return (
    <section className="pt-16" id={id}>
      <div className="flex justify-center w-full">
        <div className="mx-auto p-1 rounded-lg w-full shadow-lg bg-[#1e1e1e] flex flex-col">
          <div className="mx-6">
            <div className="w-full flex items-center justify-center border-b-4 border-pink-500 mb-4">
              <h1 className="text-2xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 drop-shadow-lg pt-8 mt-2">
                {title}
              </h1>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
