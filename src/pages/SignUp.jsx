import { MdEditDocument } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import imageUp from "../hooks/imageUp";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
const SignUp = () => {
  const axios = useAxiosSecure();
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const profilePicture = form.profilePicture.files[0];
    const userType = form.userType.value;
    const password = form.password.value;
    try {
      const imageData = await imageUp(profilePicture);
      console.log(imageData);
      const result = await createUser(email, password);
      console.log(result);
      const userInfo = { userName, email, userType };
      // const sendToDb = await axios.put(`/users/${email}`, userInfo);
      const { data: sendToDb } = await axios.put(`/users/${email}`, userInfo);
      const { data } = await axios.post(`/jwt`, email);
      console.log(data);
      await updateUserProfile(userName, imageData?.data?.display_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-10 flex bg-[#F5F7F8] items-center justify-center">
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
          Register <MdEditDocument />
        </h2>
        <form onSubmit={handleSubmit} className="w-[20.5rem]">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="user name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Profile Url</span>
            </label>
            <input type="file" name="profilePicture" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Type</span>
            </label>
            <select name="userType" className="input input-bordered" required>
              <option value="User">User</option>
              <option value="DeliveryMen">DeliveryMen</option>
            </select>
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
          <h2>Do you have an account?</h2>
          <Link
            to={"/login"}
            className="text-blue-600 font-semibold underline underline-offset-2"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
