import GridItem from "./grid-item";

export default function Grid({ images, shadow, paddingTop }) {
  return (
    <div
      className={`${shadow ? "shadow-grid" : ""} ${
        paddingTop ? "pt-24" : ""
      }  relative`}
    >
      <div className="test-grid z-0"></div>
      <div className="container mx-auto z-10  grid gap-7 auto-rows-auto  md:grid-cols-2 lg:grid-cols-3 ">
        {images?.map((item, i) => (
          <GridItem src={item.src} key={i} />
        ))}
      </div>
    </div>
  );
}
