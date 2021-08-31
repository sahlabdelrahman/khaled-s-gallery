import React, { useRef, useState } from "react";

import { storage, db, timestamp } from "../../../server/firebase";
import firebase from "firebase";

import useInput from "../../hooks/useInput";

const NewAlbumForm = () => {
  const {
    value: albumName,
    resetValue: resetAlbumName,
    bind: bindAlbumName,
    setValue: setAlbumName,
  } = useInput("");

  const {
    value: location,
    resetValue: resetLocation,
    bind: bindLocation,
    setValue: setLocation,
  } = useInput("");
  const {
    value: description,
    resetValue: resetDescription,
    bind: bindDescription,
    setValue: setDescription,
  } = useInput("");

  const valueOfFile = useRef();

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCreateAlbum = async (e) => {
    e.preventDefault();

    if (!albumName) {
      return;
    }

    const storageRef = storage.ref(`albums/${albumName}`);

    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    db.collection("albums")
      .doc(albumName)
      .set({
        name: albumName,
        location: location,
        description: description,
        images: firebase.firestore.FieldValue.arrayUnion({
          name: file.name,
          imageUrl: await fileRef.getDownloadURL(),
        }),
      });

    resetAlbumName();
    resetLocation();
    resetDescription();
    setFile(null);
    valueOfFile.current.value = "";
  };

  return (
    <form onSubmit={handleCreateAlbum} style={{ marginBottom: "20px" }}>
      <label>Album Name: </label>

      <input type="text" {...bindAlbumName} placeholder="Album name" required />
      <br />
      <label>Location: </label>
      <input type="text" {...bindLocation} placeholder="Location" required />
      <br />
      <label>Description: </label>
      <input
        type="text"
        {...bindDescription}
        placeholder="Description"
        required
      />
      <br />
      <label>Cover Album: </label>
      <input
        type="file"
        // placeholder="Cover Album"
        onChange={handleFileChange}
        ref={valueOfFile}
        required
      />
      <br />

      <button type="submit">Create Album</button>
    </form>
  );
};

export default NewAlbumForm;
