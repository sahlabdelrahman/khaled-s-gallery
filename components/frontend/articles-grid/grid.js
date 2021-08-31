import GridItem from "./grid-item";

export default function Grid({ items }) {
  return (
    <div>
      <div
        // style={{
        //   gridAutoFlow: "row dense",
        //   gridTemplateColumns: "repeat(2, 1fr)",
        // }}
        className="container mt-16  grid grid-cols-1 gap-7  md:grid-cols-2 "
      >
        {items.map((item, i) => (
          <GridItem
            key={i}
            title={item.title}
            description={item.description}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
}
