export default function Title({ bigTitle, smallTitle }) {
  return (
    <div className="flex justify-center items-center">
      <div className="container flex justify-center items-center relative ">
        <p className="text-title-tr-x-small sm:text-title-double-x-small md:text-title-xsmall lg:text-title-small xl:text-title font-bold font-open-sans text-gray-banner opacity-25 uppercase">
          {bigTitle}
        </p>
        <p className="font-bold font-open-sans text-pink-primary text-2xl uppercase absolute">
          {smallTitle}
        </p>
      </div>
    </div>
  );
}
