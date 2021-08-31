import { useState } from "react";

import Open from "../../../public/icons/menu.svg";
import Send from "../../../public/icons/send.svg";

export default function GridItem({
  id,
  title,
  description,
  src,
  openCard,
  items,
  handleItems,
}) {
  const [open, setOpen] = useState(false);

  const handelOpen = (id) => {
    const newItems = items?.map((item) => {
      if (item.id === id) {
        if (item["openCard"] == true) {
          item["openCard"] = false;
          return { ...item };
        } else {
          item["openCard"] = true;
          return { ...item };
        }
      } else {
        if (item["openCard"] == false) {
          return { ...item };
        }
        item["openCard"] = false;
        return { ...item };
      }
    });
    handleItems([...newItems]);
  };

  return (
    <div className="video flex items-center relative ">
      <div
        className={`w-3/5 h-96 absolute z-10 transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2 ${
          openCard ? "left-open" : ""
        } `}
      >
        <div className="flex items-center h-full">
          <div className="flex flex-col w-1/12">
            <button
              onClick={() => handelOpen(id)}
              className="bg-pink-primary w-10 h-10 flex justify-center items-center mb-4"
            >
              <img src={Open} alt="open video" />
            </button>
            <button className="bg-pink-primary w-10 h-10 flex justify-center items-center">
              <img src={Send} alt="send video" />
            </button>
          </div>
          <div className="w-11/12 h-full">
            <iframe
              src={src || ""}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div
        className={`w-2/5 bg-gray-video px-20 py-10 font-open-sans absolute  z-0 transition-all duration-500 ease-in-out right-1/2 transform translate-x-1/2 ${
          openCard ? "right-open" : ""
        } `}
      >
        <h4 className="text-2.5xl font-bold mb-5">{title}</h4>
        <p className="text-gray-dark-gray text-base font-normal mb-6">
          {description}
        </p>
        <a href="#" className="uppercase text-sm text-pink-primary font-normal">
          read more
        </a>
      </div>
    </div>
  );
}

// absolute ${openCard ? "relative" : ""}
