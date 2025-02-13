import Lottie from "lottie-react";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

import { Link, useLocation, useNavigate } from "react-router-dom";
import singUp from "../assets/lottie/Animation - 1735051920298.json";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { loginUser, setUser, googleLogin, gitHubLogin } =
    useContext(AuthContext);
  const [type, setType] = useState("password");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => toast.error(`Google Login Failed: ${error.message}`));
  };

  const handleGitHub = () => {
    gitHubLogin()
      .then(() => {
        navigate(location?.state?.from || "/");
      })
      .catch((error) => toast.error(`GitHub Login Failed: ${error.message}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`User Login successfully: ${user.email}`);
        e.target.reset();
        setUser(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="max-w-screen-xl h-2/3 sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-0">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-semi-bold shadow-sm rounded-lg py-3 border border-blue-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus hover:shadow-black"
                onClick={handleGoogle}
              >
                <div className="bg-white p-2 rounded-full">
                  <FcGoogle />
                </div>
                <span className="ml-4">Sign In with Google</span>
              </button>
              <button
                className="w-full max-w-xs font-semi-bold shadow-sm rounded-lg py-3 border border-blue-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow-black mt-5"
                onClick={handleGitHub}
              >
                <div className="bg-white p-1 rounded-full">
                  <svg className="w-6" viewBox="0 0 32 32">
                    <path
                      fillRule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                    />
                  </svg>
                </div>
                <span className="ml-4">Sign In with GitHub</span>
              </button>
            </div>
            <div className="my-8 text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white">
                Or with email and password
              </div>
            </div>
            <form
              className="mx-auto max-w-xs space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="relative">
                  <input
                    type={type}
                    name="password"
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <span
                    className="text-xl w-5 h-5  absolute right-4 top-7 transform -translate-y-1/2 cursor-pointer text-gray-300"
                    onClick={() =>
                      setType(type === "password" ? "text" : "password")
                    }
                  >
                    {type === "password" ? <EyeOff /> : <Eye />}
                  </span>
                </div>
              </div>
              <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out">
                Sign In
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by the
              <a href="#" className="border-b border-gray-500 mx-1">
                Terms
              </a>
              and
              <a href="#" className="border-b border-gray-500 mx-1">
                Privacy Policy
              </a>
              .
            </p>
            <p className="text-gray-800 text-sm !mt-8 text-center">
              Don&apos;t have an account
              <Link
                to="/register"
                className="text-primary hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 h-1/2 text-center hidden lg:flex items-center">
        <div className="m-12 xl:m-16 w-full ">
          <Lottie animationData={singUp} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
