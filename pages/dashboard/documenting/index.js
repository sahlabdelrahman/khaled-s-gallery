import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import FirebaseContext from "../../../context/firebase";
import { db } from "../../../server/firebase";

import ManinLayout from "../../../layouts/mainLayout";

import Grid from "../../../components/dashboard/documenting/articles-grid/grid";

import AddArticle from "../../../components/dashboard/documenting/articles-grid/add-article";

function Documenting({ articles }) {
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
        <ManinLayout dashboard={true}>
          <div className="container mx-auto max-w-screen-lg">
            <p className="text-center text-base text-gray-dark-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <AddArticle />
          <Grid items={articles} />
        </ManinLayout>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let articles = [];

  try {
    let querySnapshot = await db.collection("articles").get();

    await querySnapshot.forEach((doc) => {
      articles.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    alert(error);
  }

  return {
    props: { articles },
  };
}

export default Documenting;
