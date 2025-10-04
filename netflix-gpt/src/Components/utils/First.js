import { useState } from "react";
import Header from "./Header";

const First = () => {
  // Logic to toggle sign-in state
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="logo"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text 3xl py-4">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="FullName"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? SignUp Now"
            : "Already registered ? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default First;
