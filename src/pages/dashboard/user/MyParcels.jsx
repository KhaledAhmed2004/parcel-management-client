import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import animation from "../../../assets/animations/deliveryAnimation.json";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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

  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/bookParcel/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch();
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the file.",
          icon: "error",
        });
      }
    }
  };

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
                  <td>{parcel.deliveryDate}</td>
                  {/* <td>{parcel.bookingDate}</td> */}
                  <td>{new Date(parcel.bookingDate).toLocaleDateString()}</td>
                  <td>{parcel.deliveryMan}</td>
                  <td>{parcel.status}</td>
                  <td>
                    {parcel.status === "pending" && (
                      <div className="flex gap-2">
                        <Link
                          // to={`/update`}
                          to={`/dashBoard/update/${parcel._id}`}
                          className="p-2 bg-gray-200 text-lg rounded-lg"
                          onClick={() => handleUpdate(parcel._id)}
                        >
                          <LuFileEdit />
                        </Link>
                        <button
                          className="p-2 bg-gray-200 text-lg rounded-lg"
                          onClick={() => handleCancel(parcel._id)}
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </div>
                    )}
                    {parcel.status === "delivered" && (
                      <button onClick={() => handleReview(parcel.id)}>
                        Review
                      </button>
                    )}
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
