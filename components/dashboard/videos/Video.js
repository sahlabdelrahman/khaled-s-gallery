import { useState } from "react";

import { db } from "../../../server/firebase";
import useInput from "../../hooks/useInput";

function Video({ video, id }) {
  const [isEdited, setIsEdited] = useState(null);

  const {
    value: title,
    resetValue: resetTitle,
    bind: bindTitle,
    setValue: setTitle,
  } = useInput("");

  const {
    value: description,
    resetValue: resetDescription,
    bind: bindDescription,
    setValue: setDescription,
  } = useInput("");

  const handleDeleteVideo = (id) => {
    db.collection("videos").doc(id).delete();
  };

  const handleEdit = (id) => {
    setIsEdited(id);
    setTitle(video.title);
    setDescription(video.description);
  };

  const handleUpdate = async (id) => {
    await db.collection("videos").doc(id).update({
      title: title,
      description: description,
    });
    setIsEdited(null);
    resetTitle();
    resetDescription();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isEdited ? (
          <div>
            <label>Title: </label>
            <input type="text" {...bindTitle} />
          </div>
        ) : (
          <h3>{video.title}</h3>
        )}

        {/* crud buttons */}
        <div>
          {isEdited ? (
            <button type="button" onClick={() => handleUpdate(id)}>
              Update
            </button>
          ) : (
            <button type="button" onClick={() => handleEdit(id)}>
              Edit
            </button>
          )}
          <button type="button" onClick={() => handleDeleteVideo(id)}>
            Delete
          </button>
        </div>
      </div>
      <iframe
        width="560"
        height="315"
        src={video.embedUrl}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {isEdited ? (
        <div>
          <label>Description: </label>
          <input type="text" {...bindDescription} />
        </div>
      ) : (
        <p>{video.description}</p>
      )}
      <hr />
    </div>
  );
}

export default Video;
