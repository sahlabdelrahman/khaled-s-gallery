import Head from "next/head";

import AddVideoForm from "../../../components/dashboard/videos/AddVideoForm";
import AllVideos from "../../../components/dashboard/videos/AllVideos";

const Vidoes = () => {
  return (
    <div>
      <Head>
        <title>Vidoes</title>
      </Head>
      <main>
        {/* Videos */}
        <AllVideos />

        {/* Add video form */}
        <AddVideoForm />
      </main>
    </div>
  );
};

export default Vidoes;
