import { useNavigate } from "react-router-dom";
import { app } from "../firebase.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

const Oauth = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const auth = getAuth(app); // 'app' is the Firebase app you initialized

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await axios.post("/api/Auth/googleSignIn", {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      });
      if (res.status !== 201) {
        console.log(res);
        navigate("/Login");
      }
      navigate("/");

      // Handle the signed-in user, e.g., update your UI
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="text-white font-bold rounded-md border-none bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-2 w-full"
        onClick={signInWithGoogle}
      >
        CONTINUE WITH GOOGLE
      </button>
    </>
  );
};

export default Oauth;
