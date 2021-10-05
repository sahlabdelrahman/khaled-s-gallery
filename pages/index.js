import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import IsLoading from "../context/isLoading";

import ManinLayout from "../layouts/mainLayout";
import Banner from "../components/frontend/shared/banner";
import Grid from "../components/frontend/home-grid/grid";

import ItemOne from "../public/images/item-one.jpg";
import ItemTwo from "../public/images/item-two.jpg";
import ItemThree from "../public/images/item-three.jpg";
import ItemFour from "../public/images/item-four.jpg";

export default function Home() {
  const [images, setImages] = useState([
    {
      src: "https://lh3.googleusercontent.com/7mHEWSgvSMI2ZNe90XFRroOha14DfcujZawfkG6E1j_rd-jNvzC80WCnDNQ6csCWG3OlJzfDoF2XsH9pNfmWSp6ftnva16_66Hheph2PPj1dnpmTULFwunGel1ytDYHN8qGwXMRZvQ=w2400",
    },
    { src: ItemTwo },
    { src: ItemThree },

    { src: ItemThree },
    { src: ItemFour },
    { src: ItemOne },

    { src: ItemOne },
    { src: ItemTwo },
    { src: ItemThree },

    { src: ItemThree },
    { src: ItemFour },
    { src: ItemOne },
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
        <title>Khaled's Gallery</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ManinLayout>
        {/* <div className="test-contact"></div> */}
        <main style={{ marginTop: "100vh" }}>
          <Banner />
          <Grid images={images} shadow={true} paddingTop={true} />
        </main>
      </ManinLayout>
    </div>
  );
}
