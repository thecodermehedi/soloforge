import {useState} from "react";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  // Navigation
  const navigate = useNavigate();

  // Auth functions
  const {signIn, loginWithGoogle, loginWithGithub, setIsUserLoading} =
    useAuth();

  // Form handling
  const {register, handleSubmit} = useForm();

  // Password visibility state
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  //  Sign in
  const handleSignIn = async (data) => {
    const toastLoading = toast.loading("Please wait...");
    try {
      await signIn(data?.email, data?.password);
      navigate("/dashboard");
      toast.success("Logged in successfully", {id: toastLoading});
    } catch (error) {
      console.log(error);
      toast.error(
        error.message === "Firebase: Error (auth/invalid-credential)."
          ? "Incorrect email or password"
          : error.message,
        {id: toastLoading}
      );
      setIsUserLoading(false);
    }
  };
  // Google login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
      setIsUserLoading(false);
    }
  };
  // Github login
  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
      setIsUserLoading(false);
    }
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 pb-10">
      <div className="max-w-sm w-full space-y-5">
        <div className="text-center">
          <div className="my-5">
            <Link to="/" className="text-2xl font-bold sm:text-3xl">
              Soloforge
            </Link>
          </div>
          <p className="text-center">
            Don&#39;t have an account?{" "}
            <Link
              to={"/auth/signup"}
              className="font-medium text-black hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-sm font-medium hover:bg-black hover:bg-opacity-5 duration-300 mt-5"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-sm font-medium hover:bg-black hover:bg-opacity-5 duration-300 mt-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {required: true})}
              className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
              required
            />
          </div>
          <div className="relative">
            <label className="font-medium">Password</label>
            <button
              type="button"
              className="text-gray-400 absolute right-3 top-10 my-auto active:text-gray-600"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
            <input
              type={isPasswordHidden ? "password" : "text"}
              id="password"
              name="password"
              {...register("password", {required: true})}
              className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-black border duration-150 cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <Link to="#" className="text-center text-black hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-black   hover:rounded-lg duration-150"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
