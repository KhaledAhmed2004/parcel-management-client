// // import { useContext, useEffect, useState } from "react";
// // import { AuthContext } from "../provider/AuthProvider";
// // import useAxiosSecure from "./useAxiosSecure";
// // import { useQuery } from "@tanstack/react-query";

// // const useRole = async () => {
// //   const axios = useAxiosSecure();
// //   const { user, loading } = useContext(AuthContext);
// //   const [role, setRole] = useState(null);
// //   const { data } = useQuery({
// //     queryKey: [role, user],
// //     queryFn: async () => {
// //       const res = await axios.get(`/user/${user?.email}`);
// //       return res.data;
// //     },
// //   });
// //   return data;
// // };
// // //   useEffect(() => {
// // //     const getRole = async () => {
// // //       const { data } = await axios.get(`/user/${email}`).then(setRole(data));
// // //     };
// // //   }, [user, axios]);
// // //   return [role];
// // // };

// // export default useRole;
// // import { useContext, useEffect, useState } from "react";
// // import { AuthContext } from "../provider/AuthProvider";
// // import useAxiosSecure from "./useAxiosSecure";
// // import { useQuery } from "@tanstack/react-query";

// // const useRole = () => {
// //   const axios = useAxiosSecure();
// //   const { user } = useContext(AuthContext);
// //   const [role, setRole] = useState(null);

// //   const { data, isLoading } = useQuery({
// //     queryKey: ["userRole", user?.email],
// //     queryFn: async () => {
// //       const res = await axios.get(`/user/${user?.email}`);
// //       return res.data;
// //     },
// //     enabled: !!user, // Enable the query only when user is truthy
// //   });

// //   useEffect(() => {
// //     if (data) {
// //       setRole(data.role); // Assuming your role data is present in the response
// //     }
// //   }, [data]);

// //   return [role];
// // };

// // export default useRole;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const axios = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [role, setRole] = useState(null);

  const { data } = useQuery({
    queryKey: [email],
    queryFn: async () => {
      const res = await axios.get(`/user/${email}`);
      return res.data.userType;
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setRole(data);
    }
  }, [data]);

  return [data, role];
};

export default useRole;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const useRole = () => {
//   const axios = useAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const email = user?.email;
//   const [role, setRole] = useState(null);

//   const { data } = useQuery({
//     queryKey: ["userRole", email],
//     queryFn: async () => {
//       const res = await axios.get(`/user/${email}`);
//       return res.data.userType;
//     },
//   });

//   useEffect(() => {
//     if (data !== undefined) {
//       setRole(data);
//     }
//   }, [data]);

//   return [email, role];
// };

// export default useRole;
