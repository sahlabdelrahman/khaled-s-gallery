import { createContext } from "react";

const IsLoading = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

export default IsLoading;
