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
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid container"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(({ src, alt }, i) => (
          <GridItem key={i} src={src} alt={alt} index={i} />
        ))}
      </Masonry>
    </div>
  );
}
