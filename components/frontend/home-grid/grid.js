import Masonry from "react-masonry-css";
import GridItem from "./grid-item";

export default function Grid({ images, shadow, paddingTop }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <div
      className={`${shadow ? "shadow-grid" : ""} ${
        paddingTop ? "pt-24" : ""
      }  relative`}
    >
      <div className="test-grid z-0"></div>
      <div className="container z-10">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid container"
          columnClassName="my-masonry-grid_column"
        >
          {images?.map((item, i) => (
            <GridItem src={item.src} key={i} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
