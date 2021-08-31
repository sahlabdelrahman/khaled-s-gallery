import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

// import AddImageToAlbum from "../../../../components/dashboard/albums/AddImageToAlbum";
import AddImageToAlbumTwo from "../../../../components/dashboard/albums/AddImageToAlbumTwo";
import Category from "../../../../components/dashboard/albums/category/Category";
import useInput from "../../../../components/hooks/useInput";

import { db, storage } from "../../../../server/firebase";
import firebase from "firebase";

const Albums = ({ id }) => {
  const album = id;

  const [title, setTitle] = useState("");
  const [isEditedDetails, setIsEditedDetails] = useState(null);
  const [isEditedLocation, setIsEditedLocation] = useState(false);
  const [isEditedDescription, setIsEditedDescription] = useState(false);
  const [wholeAlbum, setWholeAlbum] = useState([]);
  const {
    value: imageDetails,
    resetValue: resetImageDetails,
    bind: bindImageDetails,
    setValue: setImageDetails,
  } = useInput("");

  const {
    value: location,
    resetValue: resetLocation,
    bind: bindLocation,
    setValue: setLocation,
  } = useInput("");

  const {
    value: description,
    resetValue: resetDescription,
    bind: bindDescription,
    setValue: setDescription,
  } = useInput("");

  useEffect(() => {
    setTitle(album);

    const unmount = db
      .collection("albums")
      .doc(album)
      .onSnapshot((doc) => {
        setWholeAlbum(doc.data());
      });

    console.log(album);

    return unmount;
  }, []);

  const handleDeleteImageFromAlbum = (imageUrl) => {
    db.collection("albums")
      .doc(wholeAlbum.name)
      .onSnapshot((doc) => {
        let userImages = doc.data().images;
        let newImages = userImages.filter(
          (image) => image.imageUrl !== imageUrl
        );
        db.collection("albums").doc(wholeAlbum.name).update({
          images: newImages,
        });
      });

    storage.refFromURL(imageUrl).delete();
  };

  const handleImageDetails = (i, details) => {
    setIsEditedDetails(i);
    setImageDetails(details);
  };

  const handleUpdateImageDetails = (imageUrl) => {
    db.collection("albums")
      .doc(wholeAlbum.name)
      .onSnapshot((doc) => {
        // get all data for images
        let userImages = doc.data().images;

        // search to find index of target image
        let foundIndex = userImages.findIndex(
          (image) => image.imageUrl === imageUrl
        );

        // set target image using index with all old data and edit image details
        userImages[foundIndex] = {
          ...userImages[foundIndex],
          imageDetails: imageDetails,
        };

        // update firestore with new data
        db.collection("albums").doc(wholeAlbum.name).update({
          images: userImages,
        });
      });
    setIsEditedDetails(null);
    resetImageDetails();
  };

  const handleEditLocation = () => {
    setIsEditedLocation(true);
    setLocation(wholeAlbum.location);
  };

  const handleEditDescription = () => {
    setIsEditedDescription(true);
    setDescription(wholeAlbum.description);
  };

  const handleUpdateLocation = () => {
    db.collection("albums").doc(wholeAlbum.name).update({
      location: location,
    });
    setIsEditedLocation(false);
    resetLocation();
  };

  const handleUpdateDescription = () => {
    db.collection("albums").doc(wholeAlbum.name).update({
      description: description,
    });
    setIsEditedDescription(false);
    resetDescription();
  };

  return (
    <div>
      <Head>
        <title>Albums[{title}]</title>
      </Head>
      <main>
        <section>
          <header>
            <h1>{wholeAlbum.name}</h1>
            <p>
              Go to the{" "}
              <Link href="/dashboard">
                <a>dashboard</a>
              </Link>
            </p>
          </header>
          <div>
            <p>Images</p>
            {wholeAlbum.images?.length > 0
              ? wholeAlbum.images?.map((image, i) => (
                  <aside key={image.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={image.imageUrl} alt={image.name} />
                      <div>
                        {isEditedDetails == i ? (
                          <button
                            onClick={() =>
                              handleUpdateImageDetails(image.imageUrl)
                            }
                          >
                            Update image details
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleImageDetails(i, image.imageDetails)
                            }
                          >
                            Edit image details
                          </button>
                        )}
                        <button
                          onClick={() =>
                            handleDeleteImageFromAlbum(image.imageUrl)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p>
                      {isEditedDetails == i ? (
                        <input type="text" required {...bindImageDetails} />
                      ) : image.imageDetails ? (
                        image.imageDetails
                      ) : (
                        image.name
                      )}
                    </p>
                    <p>{image.id ? image.id : "not exist"}</p>
                  </aside>
                ))
              : "Add images to show"}
          </div>

          {wholeAlbum.categoryOne && (
            <Category
              title="Category One"
              albumName={wholeAlbum.name}
              keyForCrud="categoryOne"
              categoryData={wholeAlbum.categoryOne}
            />
          )}
          {wholeAlbum.categoryTwo && (
            <Category
              title="Category Two"
              albumName={wholeAlbum.name}
              keyForCrud="categoryTwo"
              categoryData={wholeAlbum.categoryTwo}
            />
          )}
          {wholeAlbum.categoryThree && (
            <Category
              title="Category Three"
              albumName={wholeAlbum.name}
              keyForCrud="categoryThree"
              categoryData={wholeAlbum.categoryThree}
            />
          )}
          {wholeAlbum.categoryFour && (
            <Category
              title="Category Four"
              albumName={wholeAlbum.name}
              keyForCrud="categoryFour"
              categoryData={wholeAlbum.categoryFour}
            />
          )}
          {wholeAlbum.categoryFive && (
            <Category
              title="Category Five"
              albumName={wholeAlbum.name}
              keyForCrud="categoryFive"
              categoryData={wholeAlbum.categoryFive}
            />
          )}

          <div>
            <h3>Location and Description</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {isEditedLocation ? (
                <>
                  <div>
                    <label>Location: </label>
                    <input type="text" {...bindLocation} />
                  </div>
                  <button onClick={handleUpdateLocation}>
                    Update Location
                  </button>
                </>
              ) : (
                <>
                  <p>Location: {wholeAlbum.location}</p>
                  <button onClick={handleEditLocation}>Edit</button>
                </>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {isEditedDescription ? (
                <>
                  <div>
                    <label>Description: </label>
                    <input type="text" {...bindDescription} />
                  </div>
                  <button onClick={handleUpdateDescription}>
                    Update Description
                  </button>
                </>
              ) : (
                <>
                  <p>Description: {wholeAlbum.description}</p>
                  <button onClick={handleEditDescription}>Edit</button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer>
        {/* <AddImageToAlbum currentAlbum={album} /> */}
        <AddImageToAlbumTwo currentAlbum={album} />
      </footer>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  return {
    props: { id },
  };
};

export default Albums;
