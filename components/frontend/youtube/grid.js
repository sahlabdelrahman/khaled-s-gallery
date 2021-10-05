import { useState, useContext, useEffect } from "react";
import FirebaseContext from "../../../context/firebase";

import GridItem from "./grid-item";

export default function Grid({ dashboard }) {
  const { db } = useContext(FirebaseContext);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unmount = db
      .collection("videos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setVideos(
          snapshot?.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            openCard: false,
          }))
        );
      });

    return unmount;
  }, []);
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Video Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: "https://www.youtube.com/embed/ciG2OOJBQm8",
      openCard: false,
    },
    {
      id: "2",
      title: "Video Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      src: "https://www.youtube.com/embed/ciG2OOJBQm8",
      openCard: false,
    },
    {
      id: "3",
      title: "Video Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      src: "https://www.youtube.com/embed/ciG2OOJBQm8",
      openCard: false,
    },
    {
      id: "4",
      title: "Video Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      src: "https://www.youtube.com/embed/ciG2OOJBQm8",
      openCard: false,
    },
  ]);

  return (
    <div className="container mx-auto max-w-screen-lg grid grid-cols-1 auto-rows-auto gap-y-20">
      {videos?.map(({ id, title, description, videoId, openCard }) => (
        <GridItem
          key={id}
          id={id}
          items={videos}
          handleItems={setVideos}
          title={title}
          description={description}
          videoId={videoId}
          openCard={openCard}
          dashboard={dashboard}
        />
      ))}
    </div>
  );
}
