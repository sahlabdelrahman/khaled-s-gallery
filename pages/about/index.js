import Head from "next/head";
import { useEffect, useContext, useState } from "react";
import IsLoading from "../../context/isLoading";

import ManinLayout from "../../layouts/mainLayout";
import Banner from "../../components/frontend/shared/banner";

import ItemOne from "../../public/images/item-one.jpg";
import ItemTwo from "../../public/images/item-two.jpg";
import ItemThree from "../../public/images/item-three.jpg";
import ItemFour from "../../public/images/item-four.jpg";

export default function Home() {
  const { setIsLoading } = useContext(IsLoading);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);

    return () => window.removeEventListener("load", handleLoading);
  }, []);

  const [images, setImages] = useState([
    { src: ItemOne },
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

  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Allison&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ManinLayout>
        <main style={{ marginTop: "100vh" }}>
          <Banner />
          <div className="relative shadow-grid pt-18 pb-18">
            <div className="test-grid z-0"></div>
            <div className="container z-10 relative">
              <h1 className="text-7.5xl capitalize font-open-sans font-bold">
                about
              </h1>
              <p className="text-lg font-open-sans font-normal pt-5 pb-15 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
                nulla pellentesque dignissim enim sit amet. Ultrices eros in
                cursus turpis massa tincidunt dui ut. Blandit massa enim nec dui
                nunc. Mi quis hendrerit dolor magna eget est lorem. In tellus
                integer feugiat scelerisque varius morbi. Sit amet mattis
                vulputate enim nulla aliquet porttitor lacus luctus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Orci nulla
                pellentesque dignissim enim sit amet. Ultrices eros in cursus
                turpis massa tincidunt dui ut. Blandit massa enim nec dui nunc.
                Mi quis hendrerit dolor magna eget est lorem. In tellus integer
                feugiat scelerisque varius morbi. Sit amet mattis vulputate enim
                nulla aliquet porttitor lacus luctus.
              </p>
              <div className="relative">
                <img className=" hidden md:block bg-pink-primary w-full h-60" />
                <div
                  className="px-10 py-7 w-full md:w-2/5 lg:w-1/3 bg-pink-card md:absolute top-1/2"
                  style={{ right: "10%" }}
                >
                  <p className="flex flex-col mb-3.5">
                    <span className="font-medium uppercase text-base font-open-sans opacity-60 text-black-primary-card">
                      email
                    </span>
                    <span className="font-normal text-lg font-open-sans  text-black-secondary-card">
                      emailfortest@gmail.com
                    </span>
                  </p>
                  <p className="flex flex-col mb-3.5">
                    <span className="font-medium uppercase text-base font-open-sans opacity-60 space-x-1 text-black-primary-card">
                      role
                    </span>
                    <span className="font-normal text-lg font-open-sans  text-black-secondary-card">
                      Photographer
                    </span>
                  </p>
                  <p className="flex flex-col ">
                    <span className="font-medium uppercase text-base font-open-sans opacity-60 space-x-1 text-black-primary-card">
                      phone
                    </span>
                    <span className="font-normal text-lg font-open-sans  text-black-secondary-card">
                      +01001116328
                    </span>
                  </p>
                </div>
              </div>
              <p className="w-full md:w-2/4 text-black-item-paragraph-sec font-normal text-lg font-open-sans mt-11 leading-loose">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <p className=" text-black-item-paragraph-sec font-normal text-lg font-open-sans mt-9 leading-loose">
                Nec feugiat in fermentum posuere urna nec tincidunt. Vitae
                suscipit tellus mauris a diam. Ultrices mi tempus imperdiet
                nulla malesuada. Suspendisse ultrices gravida dictum fusce ut
                placerat orci. Elit pellentesque habitant morbi tristique
                senectus et netus et malesuada. Urna id volutpat lacus laoreet
                non curabitur gravida arcu ac. Lobortis scelerisque fermentum
                dui faucibus in ornare quam viverra orci. Tristique sollicitudin
                nibh sit amet commodo. Et odio pellentesque diam volutpat
                commodo. Aliquam etiam erat velit scelerisque in dictum non
                consectetur. Rhoncus urna neque viverra justo. Urna cursus eget
                nunc scelerisque viverra mauris. Odio euismod lacinia at quis.
                Eu nisl nunc mi ipsum faucibus vitae aliquet. Lectus arcu
                bibendum at varius vel pharetra vel turpis nunc.
              </p>
              <p className=" text-7xl font-allison font-normal text-black-item-paragraph-sec capitalize mt-10 ml-7">
                ahmed khaled
              </p>
            </div>
          </div>
          {/* <Grid images={images} shadow={true} paddingTop={true} /> */}
        </main>
      </ManinLayout>
    </div>
  );
}
