import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      toast.success(`Welcome ${user.displayName}!`);
    } catch (error) {
      console.error(error);
      toast.error("Error signing in with Google");
    }
  };

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out error", error);
        toast.error("Error signing out");
      });
  };

  return (
    <div className="login-page flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-[2rem] md:text-[2.4rem] font-medium  mb-4">Login</h2>

      <div className="google-login mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center gap-4 text-[2rem] text-white shadow-customShadow p-2 hover:bg-red-600 border -border-gray rounded-[10px]"
        >
          <FaGoogle />
          Login with Google
        </button>
      </div>
      <button
        onClick={handleSignOut}
        className="mt-4 bg-gray-500 text-white rounded-md p-2 hover:bg-gray-600"
      >
        Sign Out
      </button>
      <ToastContainer />
    </div>
  );
};
