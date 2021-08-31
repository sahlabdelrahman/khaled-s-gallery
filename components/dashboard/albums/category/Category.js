import CategoryItem from "./CategoryItem";

const Category = ({ title, categoryData, keyForCrud, albumName }) => {
  return (
    <div>
      <h3>{title}</h3>
      {categoryData?.length > 0
        ? categoryData?.map((image, i) => (
            <CategoryItem
              key={i}
              image={image}
              keyForCrud={keyForCrud}
              albumName={albumName}
            />
          ))
        : "Add images to show"}
    </div>
  );
};

export default Category;
