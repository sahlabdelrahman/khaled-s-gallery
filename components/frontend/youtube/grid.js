import { useState } from "react";

import GridItem from "./grid-item";

export default function Grid({}) {
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
      {items?.map(({ id, title, description, src, openCard }) => (
        <GridItem
          key={id}
          id={id}
          items={items}
          handleItems={setItems}
          title={title}
          description={description}
          src={src}
          openCard={openCard}
        />
      ))}
    </div>
  );
}
