import { PiHandWaving } from "react-icons/pi";
const Login = () => {
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
        <form className="w-[20.5rem]">
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
            <button className="py-3 rounded-xl bg-gray-800 text-white font-semibold text-lg">
              Login
            </button>
          </div>
        </form>
        <div className="form-control mt-6">
          <button className="py-3 rounded-xl bg-gray-800 text-white font-semibold text-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
