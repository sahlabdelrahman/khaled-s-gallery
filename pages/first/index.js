import { useEffect, useContext, useState } from "react";
import IsLoading from "../../context/isLoading";
import Head from "next/head";

import ManinLayout from "../../layouts/mainLayout";
import Grid from "../../components/frontend/first/grid";

import One from "../../public/images/inner/one.jpg";
import Two from "../../public/images/inner/two.jpg";
import Three from "../../public/images/inner/three.jpg";
import Four from "../../public/images/inner/four.jpg";
import Five from "../../public/images/inner/five.jpg";
import Six from "../../public/images/inner/six.jpg";
import Seven from "../../public/images/inner/seven.jpg";
import Eight from "../../public/images/inner/eight.jpg";
import Nine from "../../public/images/inner/nine.jpg";
import Ten from "../../public/images/inner/ten.jpg";

export default function Youtube() {
  const [images, setImages] = useState([
    { src: One, alt: "test" },
    { src: Two, alt: "test" },
    { src: Three, alt: "test" },
    { src: Four, alt: "test" },
    { src: Five, alt: "test" },
    { src: Six, alt: "test" },
    { src: Seven, alt: "test" },
    { src: Eight, alt: "test" },
    { src: Nine, alt: "test" },
    { src: Ten, alt: "test" },
  ]);

  const { setIsLoading } = useContext(IsLoading);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);

    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <div>
      <Head>
        <title>First</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="mt-32">
        <ManinLayout>
          <Grid images={images} />
        </ManinLayout>
      </main>
    </div>
  );
}
