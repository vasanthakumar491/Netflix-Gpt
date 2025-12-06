import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "./Validate";
// abcd
// efgh
const First = () => {
  // Logic to toggle sign-in state
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
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
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500">{errorMessage}</p>
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
