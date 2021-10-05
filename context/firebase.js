import { createContext } from "react";

const FirebaseContext = createContext({
  db: {},
  auth: {},
});

export default FirebaseContext;
