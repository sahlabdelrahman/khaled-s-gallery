import * as React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder(
    "https://firebasestorage.googleapis.com/v0/b/khalid-s-gallery.appspot.com/o/images%2Frestart.png?alt=media&token=742ef071-7745-4842-8542-f6c0a0697c1a"
  );

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  };
};

const Page = ({ imageProps }) => (
  <div>
    <Image {...imageProps} placeholder="blur" />
  </div>
);

export default Page;
