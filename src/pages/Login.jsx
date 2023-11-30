import { PiHandWaving } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const axios = useAxiosSecure();
  const { signIn, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Login in progress");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await signIn(email, password);
      console.log(result);
      // const userInfo = { userName, email, userType };
      // const { data: sendToDb } = await axios.put(`/users/${email}`, userInfo);
      const { data: token } = await axios.post(`/jwt`, email);
      console.log(token);
      navigate(from, { replace: true });
      toast.success("Login Successful", { id: toastId });
    } catch (error) {
      toast.error(`Login failed: ${error.code}`, { id: toastId });
    }
  };
  const handleGoogleSignUp = async () => {
    const toastId = toast.loading("Login in progress");
    try {
      const { user } = await signInWithGoogle();
      const userInfo = {
        userName: user.displayName,
        email: user.email,
        userType: "user",
      };
      const { data: sendToDb } = await axios.put(
        `/users/${user?.email}`,
        userInfo
      );
      const { data: token } = await axios.post(`/jwt`, user?.email);
      navigate(from, { replace: true });
      toast.success("Login Successful", { id: toastId });
    } catch (error) {
      toast.error(`Login failed: ${error.code}`, { id: toastId });
    }
  };
  return (
    <div className="h-screen flex bg-[#F5F7F8] items-center justify-center">
      <div
        style={{
          boxShadow: `
            -2px -2px 8px rgba(255, 255, 255, 1),
            -2px -2px 12px rgba(255, 255, 255, 0.5),
            inset 2px 2px 4px rgba(255, 255, 255, 0.1),
            2px 2px 8px rgba(0, 0, 0, 0.15)
          `,
        }}
        className="rounded-xl px-10 py-12"
      >
        <h2 className="text-3xl font-semibold pb-5 text-center flex items-center justify-center gap-2 mb-5">
          Hi, Welcome back <PiHandWaving />
        </h2>
        <form onSubmit={handleSubmit} className="w-[20.5rem]">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="py-3 transition-all hover:scale-95 ease-in-out duration-200 rounded-xl bg-gray-800 text-white font-semibold text-lg">
              Login
            </button>
          </div>
        </form>
        <div className="divider py-3">OR</div>
        <div className="form-control mt-6">
          <button
            onClick={handleGoogleSignUp}
            style={{
              boxShadow: `
              -2px -2px 8px rgba(255, 255, 255, 1),
              -2px -2px 12px rgba(255, 255, 255, 0.5),
              inset 2px 2px 4px rgba(255, 255, 255, 0.1),
              2px 2px 8px rgba(0, 0, 0, 0.15)
            `,
            }}
            className="py-3 transition-all hover:scale-95 ease-in-out duration-200 rounded-xl bg-gray-100 text-black font-semibold text-lg flex items-center justify-center gap-2"
          >
            <FcGoogle />
            Google
          </button>
        </div>
        <div className="flex gap-2 pt-4">
          <h2>Don't have account?</h2>
          <Link
            to={"/signUp"}
            className="text-blue-600 font-semibold underline underline-offset-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
