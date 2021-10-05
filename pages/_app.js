import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useState } from "react";

import FirebaseContext from "../context/firebase";
import Opens from "../context/opens";
import IsLoading from "../context/isLoading";
import { db, auth } from "../server/firebase";

function MyApp({ Component, pageProps }) {
  const [openContact, setOpenContact] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <IsLoading.Provider value={{ isLoading, setIsLoading }}>
      <FirebaseContext.Provider value={{ db, auth }}>
        <Opens.Provider value={{ openContact, setOpenContact }}>
          <Component {...pageProps} />
        </Opens.Provider>
      </FirebaseContext.Provider>
    </IsLoading.Provider>
  );
}

export default MyApp;
