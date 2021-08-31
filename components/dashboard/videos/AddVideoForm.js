import useInput from "../../hooks/useInput";
import { db, timestamp } from "../../../server/firebase";
import { useState } from "react";

function AddVideoForm() {
  const { value: title, resetValue: resetTitle, bind: bindTitle } = useInput(
    ""
  );

  const {
    value: description,
    resetValue: resetDescription,
    bind: bindDescription,
  } = useInput("");

  const {
    value: embedUrl,
    resetValue: resetEmbedUrl,
    bind: bindEmbedUrl,
  } = useInput("");

  const { value: path, setValue: setPath } = useInput("");

  const handleAddVideo = (e) => {
    e.preventDefault();

    // Add url video and details to firestore
    db.collection("videos").add({
      embedUrl: `${path}${embedUrl}`,
      title: title,
      description: description,
      timestamp: timestamp,
    });

    resetTitle();
    resetDescription();
    resetEmbedUrl();
    setPath("");
  };

  return (
    <div>
      <form onSubmit={handleAddVideo}>
        <label>Title: </label>
        <input type="text" {...bindTitle} required />
        <label>Description: </label>
        <input type="text" {...bindDescription} required />
        <label>Video id: </label>
        <input type="text" {...bindEmbedUrl} required />
        <input
          type="radio"
          name="path"
          id="youtube"
          required
          checked={path == "https://www.youtube.com/embed/"}
          onChange={(e) => setPath("https://www.youtube.com/embed/")}
        />
        <label htmlFor="youtube">Youtube</label>
        <input
          type="radio"
          name="path"
          id="vimeo"
          required
          checked={path == "https://player.vimeo.com/video/"}
          onChange={(e) => setPath("https://player.vimeo.com/video/")}
        />
        <label htmlFor="vimeo">Vimeo</label>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
}

export default AddVideoForm;

// https://www.youtube.com/embed/W4vh5qq6QQU
// https://youtu.be/W4vh5qq6QQU
