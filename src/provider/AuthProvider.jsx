import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config.js";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import { useLottie } from "lottie-react";
import womanLottieAnimation from "../lottie/woman-lottie.json";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatarIcon, setAvatarIcon] = useState(false);
  const [alreadyRegister, setAlreadyRegister] = useState(false);
  const [alreadyLogin, setAlreadyLogin] = useState(false);
  const [alreadyUpdate, setAlreadyUpdate] = useState(false);
  const [textDot, setTextDot] = useState('');
  const apiURL = `http://localhost:5000`;
  // const apiURL = import.meta.env.VITE_VERCEL_API;

  const womanLottie = () => {
    const options = {
      animationData: womanLottieAnimation,
      loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
  };

  const loginCheck = () => {
    if (alreadyLogin) {
      toast.success('Login Successfully!');
      setAlreadyLogin(false);
    }
  }

  const registerCheck = () => {
    if (alreadyRegister) {
      toast.success('Registration Successfully!');
      setAlreadyRegister(false);
    }
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserInfo = (cUser, displayNameNew, photoURLNew) => {
    setLoading(true);
    return updateProfile(cUser, {
      displayName: displayNameNew,
      photoURL: photoURLNew
    });
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    setAvatarIcon(false);
    return signInWithPopup(auth, googleProvider);
  }

  const signInWithGithub = () => {
    setLoading(true);
    setAvatarIcon(false);
    return signInWithPopup(auth, githubProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    avatarIcon,
    alreadyLogin,
    setAlreadyLogin,
    loginCheck,
    registerCheck,
    alreadyRegister,
    setAlreadyRegister,
    alreadyUpdate,
    setAlreadyUpdate,
    setAvatarIcon,
    setLoading,
    createUser,
    updateUserInfo,
    signInUser,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    textDot,
    setTextDot,
    womanLottie,
    apiURL
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;