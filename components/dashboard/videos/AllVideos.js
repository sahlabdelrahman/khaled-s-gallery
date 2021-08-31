import { useEffect, useState } from "react";

import { db } from "../../../server/firebase";
import Video from "./Video";

function AllVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unmount = db
      .collection("videos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setVideos(
          snapshot?.docs.map((doc) => ({ id: doc.id, video: doc.data() }))
        );
      });

    return unmount;
  }, []);

  return (
    <div>
      {videos.length > 0 ? (
        <>
          <h2>Some cool videos</h2>
          {videos.map(({ id, video }) => (
            <Video key={id} id={id} video={video} />
          ))}
        </>
      ) : (
        <h2>Add videos to show</h2>
      )}
    </div>
  );
}

export default AllVideos;
