import Head from "next/head";

import ManinLayout from "../../layouts/mainLayout";

import Title from "../../components/frontend/shared/title";
import Grid from "../../components/frontend/youtube/grid";

export default function Youtube() {
  return (
    <div>
      <Head>
        <title>Youtube</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="mt-32">
        <ManinLayout>
          <Title bigTitle="youtube" smallTitle="youtube" />
          <Grid />
        </ManinLayout>
      </main>
    </div>
  );
}
