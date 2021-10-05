import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// Hooks
import useInput from "../../components/hooks/useInput";

// Firebase auth and storage
import { auth, db, storage, timestamp } from "../../server/firebase";

// Components
import Albums from "../../components/dashboard/albums/albums";

const Dashboard = () => {
  // States for auth

  const {
    value: email,
    resetValue: resetEmail,
    bind: bindEmail,
  } = useInput("");

  const {
    value: password,
    resetValue: resetPassword,
    bind: bindPassword,
  } = useInput("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState(null);

  // States for upload images

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const {
    value: title,
    resetValue: resetTitle,
    bind: bindTitle,
    setValue: setTitle,
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

  // Ref to reset value of input field for uplaod image
  const valueOfInput = useRef();

  // State to get all images
  const [images, setImages] = useState([]);

  // state to Data modification
  const [dataModification, setDataModification] = useState(null);

  // state to send id to handleUpdate function to update data
  const [idOfUpdatedItem, setIdOfUpdatedItem] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    // perform some cleanup actions
    return () => unsubscribe();
  }, [user]);

  // to get all images when page mount
  useEffect(() => {
    const unmount = db
      .collection("images")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setImages(
          snapshot.docs?.map((doc) => ({ id: doc.id, image: doc.data() }))
        );
      });

    return unmount;
  }, []);

  // handle signup

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((authUser) => {
  //       return authUser.user.updateProfile({
  //         displayName: "Ahmed Khalid",
  //       });
  //     })
  //     .catch((error) => alert(error.message));

  //   resetEmail();
  //   resetPassword();
  // };

  // handle signin

  const handleSignout = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  // handle upload images
  const handleUploadImage = async (e) => {
    e.preventDefault();
    if (image) {
      const uplaodImage = await storage
        .ref(`images/${image?.name}`)
        .put(image)
        .on(
          "state_changed",
          (snapshot) => {
            // progress function
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            alert(error.message);
          },
          () => {
            // complete function
            storage
              .ref("images")
              .child(image?.name)
              .getDownloadURL()
              .then((url) => {
                db.collection("images").add({
                  timestamp: timestamp,
                  imageUrl: url,
                  title: title,
                  location: location,
                  description: description,
                });
              });
            setImage(null);
            valueOfInput.current.value = "";
            setProgress(0);
            resetTitle();
            resetLocation();
            resetDescription();
          }
        );
    } else {
      alert("Enter image please");
    }
  };

  // handle image change
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Crud operations

  // handle delete
  const handleDelete = (id, imageUrl) => {
    db.collection("images").doc(id).delete();
    storage.refFromURL(imageUrl).delete();
  };

  // handle edit
  const handleEdit = (id) => {
    setDataModification(true);
    const imageDetails = images.find((doc) => doc.id === id);

    setTitle(imageDetails.image.title);
    setLocation(imageDetails.image.location);
    setDescription(imageDetails.image.description);
    setIdOfUpdatedItem(id);
  };

  // handle update data after editing
  const handleUpdate = () => {
    db.collection("images").doc(idOfUpdatedItem).update({
      title: title,
      location: location,
      description: description,
    });
    setDataModification(null);
    resetTitle();
    resetLocation();
    resetDescription();
  };

  const handleTest = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <div>
          {/* Header */}
          <div>
            <button onClick={handleSignout}>Signout</button>
            <button onClick={handleTest}>AnyThing</button>
          </div>

          {/* component to upload image */}
          <div>
            <form onSubmit={handleUploadImage}>
              <input
                type="file"
                onChange={handleImageChange}
                ref={valueOfInput}
              />
              <input type="text" placeholder="Title" {...bindTitle} />
              <input type="text" placeholder="Location" {...bindLocation} />
              <input
                type="text"
                placeholder="Description"
                {...bindDescription}
              />
              {dataModification ? (
                <button type="button" onClick={handleUpdate}>
                  Update
                </button>
              ) : (
                <>
                  <button type="submit">Uplaod image</button>
                  <progress value={progress} max="100" />
                </>
              )}
            </form>
          </div>

          {/* component to show image  */}
          <section>
            {images.map(({ id, image }) => (
              <div key={id}>
                {/* Show */}
                <div>
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    width="200"
                    height="200"
                  />
                  <h3>Title: {image.title}</h3>
                  <h3>
                    Location: {image.location} -{" "}
                    {new Date(
                      image.timestamp?.seconds * 1000
                    ).toLocaleDateString()}
                  </h3>
                  <h3>Description: {image.description}</h3>
                </div>

                {/* crud */}
                <div>
                  <button onClick={() => handleDelete(id, image.imageUrl)}>
                    Delete
                  </button>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </div>
                <hr></hr>
              </div>
            ))}
          </section>
          {/* component to show all albums and add new album */}
          <section>
            <h1>Albums</h1>
            <Albums />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
