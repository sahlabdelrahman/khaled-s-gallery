import Head from "next/head";
import { useEffect, useContext } from "react";
import ManinLayout from "../../layouts/mainLayout";
import IsLoading from "../../context/isLoading";

import MainImage from "../../components/frontend/second/mainImage";
import SecondaryImage from "../../components/frontend/second/secondaryImage";
import LeftImage from "../../components/frontend/second/leftImage";
import RightImage from "../../components/frontend/second/rightImage";

export default function Second() {
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
        <title>Second</title>
      </Head>
      <main className="mt-32">
        <ManinLayout>
          <div className="container grid grid-cols-1 gap-8">
            <MainImage src="" />
            <LeftImage
              src=""
              title="Save Al-Aqsa Mosque"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <SecondaryImage src="" />
            <RightImage
              src=""
              title="Save Al-Aqsa Mosque"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
        </ManinLayout>
      </main>
    </div>
  );
}
