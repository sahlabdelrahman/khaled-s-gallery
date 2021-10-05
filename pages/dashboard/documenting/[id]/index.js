import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { db } from "../../../../server/firebase";

import ManinLayout from "../../../../layouts/mainLayout";

import MainDesc from "../../../../components/frontend/documenting/inner/mainDesc";
import SecondaryDesc from "../../../../components/frontend/documenting/inner/secondaryDesc";
import AnotherArticle from "../../../../components/frontend/documenting/inner/anotherArticle";

import ReactHtmlParser from "react-html-parser";
import MyEditor from "../../../../components/dashboard/documenting/inner/myEditor";

function Article({ data, id, anotherArticles }) {
  const [details, setDetails] = useState("");

  const handleAddDetails = async (e) => {
    e.preventDefault();

    try {
      await db.collection("articles").doc(id).update({
        details: details,
      });
    } catch (error) {
      alert(error);
    }
  };

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
                <img
                  src={data.imageUrl}
                  className="bg-pink-primary w-full h-56 object-cover object-center"
                />
              </header>
              <main className="border-b-2 border-gray-input-border article-details">
                {/* {data.details ? ReactHtmlParser(data.details) : ""} */}
                <MyEditor />
              </main>
              <footer className="py-18">
                <h2 className="capitalize text-2xl font-semibold font-open-sans mb-15">
                  read also
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                  {anotherArticles.slice(0, 4).map((article) => (
                    <AnotherArticle
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      description={article.description}
                      src={article.imageUrl}
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

  let anotherArticles = [];

  let querySnapshot = await db.collection("articles").get();

  await querySnapshot.forEach((doc) => {
    anotherArticles.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return {
    props: { data, id, anotherArticles },
  };
}

export default Article;
