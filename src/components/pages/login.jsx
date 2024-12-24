import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useState } from "react";

export const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="google-login mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
        >
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
