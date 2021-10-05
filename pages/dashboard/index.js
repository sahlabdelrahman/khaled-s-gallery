import Head from "next/head";
import { useEffect, useState } from "react";

// Firebase auth and storage
import { db } from "../../server/firebase";

import ManinLayout from "../../layouts/mainLayout";
// import Grid from "../../components/dashboard/home/grid";
// import AddPhoto from "../../components/dashboard/home/add-photo";

function Dashboard({ images }) {
  // const [realtimeImages, setRealtimeImages] = useState([]);

  // useEffect(() => {
  //   setRealtimeImages([...images]);
  // }, []);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <ManinLayout dashboard={true}>
        <main className="mt-32">
          {/* <AddPhoto /> */}
          {/* <Grid images={images} /> */}
        </main>
      </ManinLayout>
    </div>
  );
}

export async function getStaticProps() {
  // const res = await db
  //   .collection("images")
  //   .orderBy("timestamp", "desc")
  //   .onSnapshot((snapshot) =>
  //     snapshot.docs?.map((doc) => ({ id: doc.id, image: doc.data() }))
  //   );

  let images = [];

  try {
    const querySnapshot = await db.collection("images").get();

    await querySnapshot.forEach((doc) => {
      images.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    alert("Error getting documents: ", error);
    // return something else here, or an empty props, or throw an exception or whatever
  }

  return {
    props: { images },
  };
}

export default Dashboard;
