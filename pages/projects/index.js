import { useEffect, useContext, useState } from "react";
import IsLoading from "../../context/isLoading";
import Head from "next/head";

import ManinLayout from "../../layouts/mainLayout";
import Grid from "../../components/frontend/projects/grid";

import ItemOne from "../../public/images/item-one.jpg";
import ItemTwo from "../../public/images/item-two.jpg";
import ItemThree from "../../public/images/item-three.jpg";
import Title from "../../components/frontend/shared/title";

export default function Projects() {
  const [images, setImages] = useState([
    { src: ItemOne, href: "/first" },
    { src: ItemTwo, href: "/second" },
    { src: ItemThree, href: "/first" },
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
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="mt-32">
        <ManinLayout>
          <Title bigTitle="projects" smallTitle="projects" />
          <Grid images={images} />
        </ManinLayout>
      </main>
    </div>
  );
}
