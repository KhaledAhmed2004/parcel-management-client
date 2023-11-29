import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import animation from "../../../assets/animations/deliveryAnimation.json";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";

const MyParcels = () => {
  const axios = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myParcels"],
    queryFn: async () => {
      const res = await axios.get(`/myParcels/${user?.email}`);
      return res.data;
    },
  });
  console.log(data);

  if (isLoading) {
    return (
      <div className="h-screen">
        <Lottie className="h-full" animationData={animation}></Lottie>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">My Parcels</h2>
      <div className="overflow-x-auto">
        {data.length === 0 ? (
          <p>No parcels found.</p>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Parcel Type</th>
                <th>Requested Delivery Date</th>
                <th>Approximate Delivery Date</th>
                <th>Booking Date</th>
                <th>Delivery Men ID</th>
                <th>Booking Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((parcel, index) => (
                <tr key={parcel._id}>
                  <td>{index + 1}</td>
                  <td>{parcel.parcelType}</td>
                  <td>{parcel.requestedDeliveryDate}</td>
                  <td>{parcel.approximateDeliveryDate}</td>
                  <td>{parcel.bookingDate}</td>
                  <td>{parcel.deliveryMenId}</td>
                  <td>{parcel.status}</td>
                  <td>
                    {parcel.status === "pending" && (
                      <div className="flex gap-2">
                        <button
                          className="p-2 bg-gray-200 text-lg rounded-lg"
                          onClick={() => handleUpdate(parcel.id)}
                        >
                          <LuFileEdit />
                        </button>
                        <button
                          className="p-2 bg-gray-200 text-lg rounded-lg"
                          onClick={() => handleCancel(parcel.id)}
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </div>
                    )}
                    {/* {parcel.status === "delivered" && (
                      <button onClick={() => handleReview(parcel.id)}>
                        Review
                      </button>
                    )} */}
                    {/* <button
                      className="p-2 bg-gray-200 text-lg rounded-lg"
                      onClick={() => handlePay(parcel.id)}
                    >
                      <MdOutlinePayment />
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyParcels;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";
// import animation from "../../../assets/animations/deliveryAnimation.json";

// const MyParcels = () => {
//   const axios = useAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const { data, isLoading, refetch } = useQuery({
//     queryKey: ["myParcels"],
//     queryFn: async () => {
//       const res = await axios.get(`/myParcels/${user?.email}`);
//       return res.data;
//     },
//   });
//   console.log(data);
//   if (isLoading) {
//     return (
//       <div className="h-screen">
//         <Lottie className="h-full" animationData={animation}></Lottie>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h2 className="text-3xl font-semibold text-center">My Parcels</h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Parcel Type</th>
//               <th>Requested Delivery Date</th>
//               <th>Approximate Delivery Date</th>
//               <th>Booking Date</th>
//               <th>Delivery Men ID</th>
//               <th>Booking Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((parcel) => (
//               <tr key={parcel.id}>
//                 <td>{parcel.id}</td>
//                 <td>{parcel.type}</td>
//                 <td>{parcel.requestedDeliveryDate}</td>
//                 <td>{parcel.approximateDeliveryDate}</td>
//                 <td>{parcel.bookingDate}</td>
//                 <td>{parcel.deliveryMenId}</td>
//                 <td>{parcel.status}</td>
//             {/* <td>
//                   {parcel.status === "pending" && (
//                     <>
//                       <button onClick={() => handleUpdate(parcel.id)}>
//                         Update
//                       </button>
//                       <button onClick={() => handleCancel(parcel.id)}>
//                         Cancel
//                       </button>
//                     </>
//                   )}
//                   {parcel.status === "delivered" && (
//                     <button onClick={() => handleReview(parcel.id)}>
//                       Review
//                     </button>
//                   )}
//                   <button onClick={() => handlePay(parcel.id)}>Pay</button>
//                 </td> */}
//             {/* </tr> */}
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyParcels;

// import { useState } from "react";

// const MyParcels = () => {
//   const parcelsData = [
//     {
//       id: 1,
//       type: "Small",
//       requestedDeliveryDate: "2023-12-01",
//       approximateDeliveryDate: "2023-12-05",
//       bookingDate: new Date().toLocaleDateString(),
//       deliveryMenId: null,
//       status: "pending",
//     },
//   ];

//   const [parcels, setParcels] = useState(parcelsData);
//   const [statusFilter, setStatusFilter] = useState("all");

//   const handleUpdate = (id) => {
//     const selectedParcel = parcels.find((parcel) => parcel.id === id);
//     if (selectedParcel && selectedParcel.status === "pending") {
//       console.log(`Redirect to update booking page for parcel ${id}`);
//     } else {
//       console.log("Cannot update booking for this parcel.");
//     }
//   };

//   const handleCancel = (id) => {
//     // Show an alert before changing the status to cancel
//     const confirmCancel = window.confirm(
//       "Are you sure you want to cancel this booking?"
//     );
//     if (confirmCancel) {
//       // Update the status to cancel if the user confirms
//       setParcels((prevParcels) =>
//         prevParcels.map((parcel) =>
//           parcel.id === id ? { ...parcel, status: "cancelled" } : parcel
//         )
//       );
//     }
//   };

//   const handleReview = (id) => {
//     // Redirect user to the review page
//     // Check if the status is 'delivered' before showing the review button
//     const selectedParcel = parcels.find((parcel) => parcel.id === id);
//     if (selectedParcel && selectedParcel.status === "delivered") {
//       // Redirect logic goes here
//       console.log(`Redirect to review page for parcel ${id}`);
//     } else {
//       // Display a message or hide the review button
//       console.log("Cannot leave a review for this parcel.");
//     }
//   };

//   const handlePay = (id) => {
//     // Implement payment logic as needed
//     console.log(`Implement payment logic for parcel ${id}`);
//   };

//   const handleStatusFilterChange = (e) => {
//     // Update status filter when the user selects a different status
//     setStatusFilter(e.target.value);
//   };

//   // Apply the status filter to the displayed parcels
//   const filteredParcels =
//     statusFilter === "all"
//       ? parcels
//       : parcels.filter((parcel) => parcel.status === statusFilter);

//   return (
//     <div>
//       <h2 className="text-3xl font-semibold text-center">My Parcels</h2>
//       <div>
//         {/* Status filter */}
//         <label htmlFor="statusFilter">Filter by Status: </label>
//         <select
//           id="statusFilter"
//           onChange={handleStatusFilterChange}
//           value={statusFilter}
//         >
//           <option value="all">All</option>
//           <option value="pending">Pending</option>
//           <option value="on the way">On the Way</option>
//           <option value="delivered">Delivered</option>
//           <option value="returned">Returned</option>
//           <option value="cancelled">Cancelled</option>
//         </select>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Parcel Type</th>
//               <th>Requested Delivery Date</th>
//               <th>Approximate Delivery Date</th>
//               <th>Booking Date</th>
//               <th>Delivery Men ID</th>
//               <th>Booking Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* rows */}
//             {filteredParcels.map((parcel) => (
//               <tr key={parcel.id}>
//                 <td>{parcel.id}</td>
//                 <td>{parcel.type}</td>
//                 <td>{parcel.requestedDeliveryDate}</td>
//                 <td>{parcel.approximateDeliveryDate}</td>
//                 <td>{parcel.bookingDate}</td>
//                 <td>{parcel.deliveryMenId}</td>
//                 <td>{parcel.status}</td>
//                 <td>
//                   {parcel.status === "pending" && (
//                     <>
//                       <button onClick={() => handleUpdate(parcel.id)}>
//                         Update
//                       </button>
//                       <button onClick={() => handleCancel(parcel.id)}>
//                         Cancel
//                       </button>
//                     </>
//                   )}
//                   {parcel.status === "delivered" && (
//                     <button onClick={() => handleReview(parcel.id)}>
//                       Review
//                     </button>
//                   )}
//                   <button onClick={() => handlePay(parcel.id)}>Pay</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyParcels;
