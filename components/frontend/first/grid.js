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
      <div className="container mb-7">
        <GridItem src={images[0].src} alt={images[0].alt} index={0} />
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid container"
        columnClassName="my-masonry-grid_column"
      >
        {images.slice(1).map(({ src, alt }, i) => (
          <GridItem key={i} src={src} alt={alt} index={i} />
        ))}
      </Masonry>
    </div>
  );
}
