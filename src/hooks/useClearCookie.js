import useAxiosSecure from "./useAxiosSecure";

// export const clearCookie = async () => {
//   const { data } = await axios.get("http://localhost:5000/logout");
//   return data;
// };

const useClearCookie = async () => {
  const axios = useAxiosSecure();
  const { data } = await axios.get("/logout");
  return data;
};

export default useClearCookie;
