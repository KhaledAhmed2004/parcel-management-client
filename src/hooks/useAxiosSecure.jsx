import axios from "axios";

const instance = axios.create({
  baseURL: "https://parcel-management-server-pi.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useClearCookie from "./useClearCookie";

// const instance = axios.create({
//   baseURL: "http://localhost:5000",
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   const navigate = useNavigate();

//   instance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (
//         error.response &&
//         (error.response.status === 401 || error.response.status === 403)
//       ) {
//         await useClearCookie();
//         navigate("/login", { replace: true });
//       }
//       return Promise.reject(error);
//     }
//   );

//   return instance;
// };

// export default useAxiosSecure;
