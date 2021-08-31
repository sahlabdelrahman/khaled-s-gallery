import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { db, storage } from "../../../../server/firebase";
import useInput from "../../../hooks/useInput";

function CategoryItem({ image, keyForCrud, albumName }) {
  const [isEdited, setIsEdited] = useState(false);

  const {
    value: imageDetails,
    resetValue: resetImageDetails,
    bind: bindImageDetails,
    setValue: setImageDetails,
  } = useInput("");

  const handleEdit = () => {
    setIsEdited(true);
    setImageDetails(image.imageDetails);
  };

  const handleUpdate = (imageUrl) => {
    db.collection("albums")
      .doc(albumName)
      .onSnapshot((doc) => {
        let userImages = doc.data()[keyForCrud];

        let foundIndex = userImages.findIndex(
          (image) => image.imageUrl === imageUrl
        );

        userImages[foundIndex] = {
          ...userImages[foundIndex],
          imageDetails: imageDetails,
        };

        db.collection("albums")
          .doc(albumName)
          .update({
            [keyForCrud]: userImages,
          });
      });

    setIsEdited(false);
    resetImageDetails();
  };

  const handleDelete = (imageUrl) => {
    db.collection("albums")
      .doc(albumName)
      .onSnapshot((doc) => {
        let userImages = doc.data()[keyForCrud];

        let newImages = userImages?.filter(
          (image) => image.imageUrl !== imageUrl
        );

        db.collection("albums")
          .doc(albumName)
          .update({
            [keyForCrud]: newImages,
          });
      });

    storage.refFromURL(imageUrl).delete();
  };

  return (
    <aside key={image.name}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <img src={image.imageUrl} alt={image.name} width={150} height={150} /> */}
        <LazyLoadImage
          src={image.imageUrl}
          alt={image.name}
          height={150}
          width={150}
          effect="blur"
        />
        <div>
          {isEdited ? (
            <button onClick={() => handleUpdate(image.imageUrl)}>
              Update image details
            </button>
          ) : (
            <button onClick={() => handleEdit()}>Edit image details</button>
          )}
          <button onClick={() => handleDelete(image.imageUrl)}>Delete</button>
        </div>
      </div>
      {isEdited ? (
        <>
          <label>Image details: </label>
          <input type="text" {...bindImageDetails} />
        </>
      ) : (
        <p>{image.imageDetails}</p>
      )}
    </aside>
  );
}

export default CategoryItem;
