import { createContext } from "react";

const AuthUserContext = createContext({
  authUser: null,
  loading: true,
});

export default AuthUserContext;
