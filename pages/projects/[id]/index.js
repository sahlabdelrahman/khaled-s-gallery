import Head from "next/head";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Project - {id}</title>
      </Head>
      <main>
        <h1>Project - {id}</h1>
      </main>
    </div>
  );
};

export default Project;
