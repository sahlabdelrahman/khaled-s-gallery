import Head from "next/head";
import { useEffect, useContext, useState } from "react";
import IsLoading from "../../context/isLoading";

import ManinLayout from "../../layouts/mainLayout";

import Title from "../../components/frontend/shared/title";
import Grid from "../../components/frontend/articles-grid/grid";

import itemOne from "../../public/images/items/itemOne.png";
import itemTwo from "../../public/images/items/itemTwo.png";
import itemThree from "../../public/images/items/itemThree.png";
import itemFour from "../../public/images/items/itemFour.png";

export default function Documenting() {
  const [items, setItems] = useState([
    {
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      src: itemOne,
    },
    {
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      src: itemTwo,
    },
    {
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      src: itemThree,
    },
    {
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      src: itemFour,
    },
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
        <title>Documenting</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="mt-32">
        <ManinLayout>
          <Title bigTitle="articles" smallTitle="articles" />
          <div className="container mx-auto max-w-screen-lg">
            <p className="text-center text-base text-gray-dark-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Grid items={items} />
        </ManinLayout>
      </main>
    </div>
  );
}
