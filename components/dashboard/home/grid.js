import Masonry from "react-masonry-css";
import GridItem from "./grid-item";

export default function Grid({ images }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <div className={`relative py-8`}>
      <div className="test-grid z-0"></div>
      <div className="container z-10">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid container"
          columnClassName="my-masonry-grid_column"
        >
          {images?.map((item, i) => (
            <GridItem
              id={item.id}
              title={item.title}
              description={item.description}
              src={item.imageUrl}
              key={i}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
