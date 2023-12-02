// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AllUsers = () => {
//   const axios = useAxiosSecure();
//   const { data, isLoading, refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axios.get(`/allUsers`);
//       return res.data;
//     },
//   });
//   console.log(data);
//   return (
//     <div>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Job</th>
//               <th>Favorite Color</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             <tr>
//               <th>1</th>
//               <td>Cy Ganderton</td>
//               <td>Quality Control Specialist</td>
//               <td>Blue</td>
//             </tr>
//             {/* row 2 */}
//             <tr className="hover">
//               <th>2</th>
//               <td>Hart Hagerty</td>
//               <td>Desktop Support Technician</td>
//               <td>Purple</td>
//             </tr>
//             {/* row 3 */}
//             <tr>
//               <th>3</th>
//               <td>Brice Swyre</td>
//               <td>Tax Accountant</td>
//               <td>Red</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;

// // // import { useState, useEffect } from "react";
// // // import useAxiosSecure from "../../../hooks/useAxiosSecure";
// // // import { useQuery } from "@tanstack/react-query";

// // // const AllUsers = () => {
// // //   const axios = useAxiosSecure();
// // //   const [users, setUsers] = useState([]);

// // //   const { data } = useQuery({
// // //     queryKey: ["allUsers"],
// // //     queryFn: async () => {
// // //       const res = await axios.get("/allUsers");
// // //       return res.data;
// // //     },
// // //   });
// // //   console.log(data);

// // //   //   useEffect(() => {
// // //   //     axios
// // //   //       .get("/allUsers")
// // //   //       .then((response) => {
// // //   //         setUsers(response.data);
// // //   //       })
// // //   //       .catch((error) => {
// // //   //         console.error("Error fetching users:", error);
// // //   //       });
// // //   //   }, [axios]);

// // //   const makeDeliveryMen = (userId) => {
// // //     // Implement logic to change user type to Delivery Men
// // //     // You can use axios.patch or axios.put to update the user's type
// // //     // Example: axios.patch(`/api/users/${userId}`, { userType: 'Delivery Men' });
// // //   };

// // //   const makeAdmin = (userId) => {
// // //     // Implement logic to change user type to Admin
// // //     // You can use axios.patch or axios.put to update the user's type
// // //     // Example: axios.patch(`/api/users/${userId}`, { userType: 'Admin' });
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>All Users</h1>
// // //       <div className="overflow-x-auto">
// // //         <table className="table">
// // //           <thead>
// // //             <tr>
// // //               <th></th>
// // //               <th>Name</th>
// // //               <th>Phone Number</th>
// // //               <th>Number of Parcels Booked</th>
// // //               <th>Total Spent Amount</th>
// // //               <th>Make Delivery Men</th>
// // //               <th>Make Admin</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {data.map((user, index) => (
// // //               <tr key={user.id}>
// // //                 <th>{index + 1}</th>
// // //                 <td>{user.userName}</td>
// // //                 <td>{user.phoneNumber}</td>
// // //                 <td>{user.numberOfParcelsBooked}</td>
// // //                 <td>{user.totalSpentAmount}</td>
// // //                 <td>
// // //                   <button onClick={() => makeDeliveryMen(user.id)}>
// // //                     Make Delivery Men
// // //                   </button>
// // //                 </td>
// // //                 <td>
// // //                   <button onClick={() => makeAdmin(user.id)}>Make Admin</button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AllUsers;

// // import { useState } from "react";
// // import useAxiosSecure from "../../../hooks/useAxiosSecure";
// // import { useQuery } from "@tanstack/react-query";

// // const AllUsers = () => {
// //   const axios = useAxiosSecure();
// //   const [users, setUsers] = useState([]);

// //   const { data } = useQuery({
// //     queryKey: ["allUsers"],
// //     queryFn: async () => {
// //       const res = await axios.get("/allUsers");
// //       return res.data;
// //     },
// //   });

// //   // Uncomment the useEffect block to fetch users
// //   // useEffect(() => {
// //   //   axios
// //   //     .get("/allUsers")
// //   //     .then((response) => {
// //   //       setUsers(response.data);
// //   //     })
// //   //     .catch((error) => {
// //   //       console.error("Error fetching users:", error);
// //   //     });
// //   // }, [axios]);

// //   const makeDeliveryMen = (userId) => {
// //     // Implement logic to change user type to Delivery Men
// //     // You can use axios.patch or axios.put to update the user's type
// //     // Example: axios.patch(`/api/users/${userId}`, { userType: 'Delivery Men' });
// //   };

// //   const makeAdmin = (userId) => {
// //     // Implement logic to change user type to Admin
// //     // You can use axios.patch or axios.put to update the user's type
// //     // Example: axios.patch(`/api/users/${userId}`, { userType: 'Admin' });
// //   };

// //   return (
// //     <div>
// //       <h1>All Users</h1>
// //       <div className="overflow-x-auto">
// //         <table className="table">
// //           <thead>
// //             <tr>
// //               <th></th>
// //               <th>Name</th>
// //               <th>Phone Number</th>
// //               <th>Number of Parcels Booked</th>
// //               <th>Total Spent Amount</th>
// //               <th>Make Delivery Men</th>
// //               <th>Make Admin</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {data.map((user, index) => (
// //               <tr key={user.id}>
// //                 <th>{index + 1}</th>
// //                 <td>{user.userName}</td>
// //                 <td>{user.phoneNumber}</td>
// //                 <td>{user.numberOfParcelsBooked}</td>
// //                 <td>{user.totalSpentAmount}</td>
// //                 <td>
// //                   <button onClick={() => makeDeliveryMen(user.id)}>
// //                     Make Delivery Men
// //                   </button>
// //                 </td>
// //                 <td>
// //                   <button onClick={() => makeAdmin(user.id)}>Make Admin</button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllUsers;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axios = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`/allUsers`);
      return res.data;
    },
  });

  const makeDeliveryMen = (userId) => {
    // Implement logic to change user type to Delivery Men
    // You can use axios.patch or axios.put to update the user's type
    // Example: axios.patch(`/api/users/${userId}`, { userType: 'Delivery Men' });
  };

  const makeAdmin = (userId) => {
    // Implement logic to change user type to Admin
    // You can use axios.patch or axios.put to update the user's type
    // Example: axios.patch(`/api/users/${userId}`, { userType: 'Admin' });
  };

  return (
    <div>
      <h1>All Users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Number of Parcels Booked</th>
              <th>Total Spent Amount</th>
              <th>Make Delivery Men</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={user.email}>
                <th>{index + 1}</th>
                <td>{user.userName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.numberOfParcelsBooked}</td>
                <td>{user.totalSpentAmount}</td>
                <td>
                  <button
                    className="p-2 bg-gray-200 text-lg rounded-lg"
                    onClick={() => makeDeliveryMen(user.email)}
                  >
                    Make Delivery Men
                  </button>
                </td>
                <td>
                  <button
                    className="p-2 bg-gray-200 text-lg rounded-lg"
                    onClick={() => makeAdmin(user.email)}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
