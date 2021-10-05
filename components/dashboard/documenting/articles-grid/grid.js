import GridItem from "./grid-item";

export default function Grid({ items }) {
  return (
    <div className="pb-16">
      <div className="container  grid grid-cols-1 gap-7  md:grid-cols-2 ">
        {items.map((item, i) => (
          <GridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
