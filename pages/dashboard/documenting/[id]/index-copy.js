import Head from "next/head";
import { useRouter } from "next/router";

import { db } from "../../../../server/firebase";

import { useEffect, useState } from "react";
import ManinLayout from "../../../../layouts/mainLayout";

import MainDesc from "../../../../components/frontend/documenting/inner/mainDesc";
import SecondaryDesc from "../../../../components/frontend/documenting/inner/secondaryDesc";
import AnotherArticle from "../../../../components/frontend/documenting/inner/anotherArticle";

function Article({ data, id }) {
  const [anotherArticles, setAnotherArticles] = useState([
    {
      id: "1",
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. ",
      src: "",
    },
    {
      id: "2",
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. ",
      src: "",
    },
    {
      id: "3",
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. ",
      src: "",
    },
    {
      id: "4",
      title: "Article Example Name",
      description:
        "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. ",
      src: "",
    },
  ]);

  return (
    <div>
      <Head>
        <title>Article - {id}</title>
      </Head>
      <main className="mt-32">
        <main className="mt-32">
          <ManinLayout dashboard={true}>
            <div className="container">
              <header>
                <h1 className="font-bold  text-2.5xl sm:text-3.5xl font-open-sans capitalize w-full lg:w-2/3">
                  {data.title}
                </h1>
                <p className="text-gray-dark-gray font-open-sans text-sm sm:text-base font-normal mt-5 mb-10">
                  26 May 2021 - 06:30 PM
                </p>
                <img className="bg-pink-primary w-full h-56" />
              </header>
              <main className="border-b-2 border-gray-input-border">
                <MainDesc
                  title="Main Title Example Text"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into eleLorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <SecondaryDesc
                  title="Main Title Example Text "
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  src=""
                />
                <MainDesc
                  title="Main Title Example Text"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into eleLorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              </main>
              <footer className="py-18">
                <h2 className="capitalize text-2xl font-semibold font-open-sans mb-15">
                  read also
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                  {anotherArticles.map((article) => (
                    <AnotherArticle
                      key={article.id}
                      title={article.title}
                      description={article.description}
                      src={article.src}
                    />
                  ))}
                </div>
              </footer>
            </div>
          </ManinLayout>
        </main>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  let articlesIds = [];

  try {
    let querySnapshot = await db.collection("articles").get();

    await querySnapshot.forEach((doc) => {
      articlesIds.push({
        id: doc.id,
      });
    });
  } catch (error) {
    alert(error);
  }

  const paths = articlesIds.map((article) => ({ params: { id: article.id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const data = await (await db.collection("articles").doc(id).get()).data();

  return {
    props: { data, id },
  };
}

export default Article;
