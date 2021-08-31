import React, { useRef, useState } from "react";

// Firebase
import firebase from "firebase";
import { db, storage } from "../../../server/firebase";

import useInput from "../../hooks/useInput";

const AddImageToAlbum = ({ currentAlbum }) => {
  const [file, setFile] = useState(null);

  const valueOfInput = useRef();

  const {
    value: imageDetails,
    resetValue: resetImageDetails,
    bind: bindImageDetails,
    setValue: setImageDetails,
  } = useInput("");

  const categories = [
    { text: "category one", value: "categoryOne" },
    { text: "category two", value: "categoryTwo" },
    { text: "category three", value: "categoryThree" },
    { text: "category four", value: "categoryFour" },
    { text: "category five", value: "categoryFive" },
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();

    const storageRef = storage.ref(`albums/${currentAlbum}`);
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);

    db.collection("albums")
      .doc(currentAlbum)
      .update({
        images: firebase.firestore.FieldValue.arrayUnion({
          name: file.name,
          imageUrl: await fileRef.getDownloadURL(),
          imageDetails: imageDetails ? imageDetails : file.name,
        }),
      });

    setFile(null);
    valueOfInput.current.value = "";
    resetImageDetails();
  };

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <section>
      <div>
        <h4>Add new image</h4>
        <form onSubmit={handleUploadImage}>
          <label>Image: </label>
          <input
            type="file"
            onChange={handleFileChange}
            ref={valueOfInput}
            required
          />

          <label>Image Details: </label>
          <input
            type="text"
            placeholder="Image Details"
            {...bindImageDetails}
          />
          <label>Category: </label>
          <select onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.text}
              </option>
            ))}
          </select>
          <button type="submit">Upload Image</button>
        </form>
      </div>
    </section>
  );
};

export default AddImageToAlbum;
