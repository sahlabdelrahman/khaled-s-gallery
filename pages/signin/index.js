import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import useInput from "../../components/hooks/useInput";
import FirebaseContext from "../../context/firebase";

const Signin = () => {
  const router = useRouter();

  const { auth } = useContext(FirebaseContext);
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

  // handle signin

  const handleSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => router.push("/dashboard"))
      .catch((error) => alert(error.message));

    resetEmail();
    resetPassword();
  };

  return (
    <div>
      <Head>
        <title>Signin</title>
      </Head>
      <main>
        <div className="container p-4">
          <h2 className="mb-4">SignIn</h2>
          <form onSubmit={handleSignin}>
            <div>
              <label className="w-16 inline-block">Email</label>
              <input
                className="p-2 mb-2 ml-2 border border-solid border-pink-primary"
                type="email"
                placeholder="Email"
                {...bindEmail}
              />
            </div>
            <div>
              <label className="w-16 inline-block">Password</label>
              <input
                className="p-2 mb-2 ml-2 border border-solid border-pink-primary"
                type="password"
                placeholder="Password"
                {...bindPassword}
              />
              <div>
                <button
                  className="p-2 bg-pink-primary text-white"
                  type="submit"
                >
                  SignIn
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signin;
