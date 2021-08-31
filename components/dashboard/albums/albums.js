import React, { useEffect, useState } from "react";
import Link from "next/link";

// Firebase auth and storage
import { db } from "../../../server/firebase";

// Components
import NewAlbumForm from "./newAlbumForm";

const Albums = () => {
  // State to get all albums
  const [albums, setAlbums] = useState([]);

  // to get all albums when page mount
  useEffect(() => {
    const unmount = db
      .collection("albums")

      .onSnapshot((snapshot) => {
        const tempAlbums = [];
        snapshot.forEach((doc) => {
          tempAlbums.push({ ...doc.data(), id: doc.id });
        });

        setAlbums(tempAlbums);

        // setAlbums(
        //   snapshot.docs?.map((doc) => ({ id: doc.id, album: doc.data() }))
        // );
      });

    console.log("albums => ", albums);

    return unmount;
  }, []);

  return (
    <section>
      {albums.length > 0
        ? albums.map((album) => (
            <div key={album.id}>
              <Link href={`dashboard/albums/${album.name}`}>
                <a>
                  <aside>
                    {album.images ? (
                      <img
                        src={album.images[0]?.imageUrl}
                        alt="thum"
                        width="100px"
                        height="100px"
                      />
                    ) : (
                      <img
                        alt="add image"
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          padding: "20px 5px",
                          width: "100px",
                          height: "100px",
                          boxShadow: "0 0 2px 1px rgba(0, 140, 186, 0.5)",
                        }}
                      />
                    )}

                    <h3>{album.name}</h3>
                  </aside>
                  <hr></hr>
                </a>
              </Link>
            </div>
          ))
        : "Add album to show"}
      <h3>Add New Album</h3>
      <NewAlbumForm />
    </section>
  );
};

export default Albums;
