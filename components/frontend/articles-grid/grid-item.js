export default function GridItem({ title, description, src }) {
  return (
    <div className={`font-open-sans`}>
      <header>
        <img className="w-full h-114" src={src} />
      </header>
      <section className=" bg-gray-details-bg px-7 pt-6 pb-7">
        <h4 className="text-black-item-text font-bold text-2xl mb-4">
          {title}
        </h4>
        <p className="text-black-item-paragraph font-normal	leading-7	 text-lg flex items-center">
          {description}
        </p>
      </section>
    </div>
  );
}
