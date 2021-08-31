import { createContext } from "react";

const Opens = createContext({
  openContact: false,
  setOpenContact: () => {},
});

export default Opens;
