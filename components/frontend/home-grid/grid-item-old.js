import { forwardRef, useState } from "react";
import Image from "next/image";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import { AppBar, Toolbar } from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GridItem({ src }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className=" h-72 relative shadow-button ">
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        loading="lazy"
        className="w-full"
      />
      <div className="absolute flex flex-col justify-end pl-6 pb-5 w-full h-full bg-gray-item-opacity transition duration-500 ease-in-out opacity-0 hover:opacity-100">
        <p className="text-white bg-pink-primary py-1 px-4 mb-3 rounded-xl w-20 text-xs	font-extrabold capitalize flex justify-center items-center">
          featured
        </p>
        <h4
          onClick={() => handleClickOpen(src)}
          className="font-open-sans text-2xl	font-bold	leading-9 text-white cursor-pointer"
        >
          Palestine Revolution Just an Example Text
        </h4>
      </div>
      <Dialog
        fullScreen
        open={selectedImage !== null}
        onClose={handleClose}
        TransitionComponent={Transition}
        transitionDuration={500}
      >
        <div className="bg-black-black w-full h-full">
          <AppBar>
            <Toolbar>
              <p onClick={handleClose} aria-label="close">
                x
              </p>
            </Toolbar>
          </AppBar>

          {selectedImage && (
            <div className="container">
              <Image
                src={selectedImage}
                alt={selectedImage}
                objectFit="contain"
                layout="fill"
                quality={100}
              />
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

// left-6 bottom-5
