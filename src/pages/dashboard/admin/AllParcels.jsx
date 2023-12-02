import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useState } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import animation from "../../../assets/animations/deliveryAnimation.json";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllParcels = () => {
  const axios = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myParcels"],
    queryFn: async () => {
      const res = await axios.get(`/allParcels`);
      return res.data;
    },
  });

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage selected delivery man and delivery date in the modal
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState("");
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState("");

  // Function to handle the "Manage" button click and open the modal
  const handleManageClick = () => {
    setIsModalOpen(true);
  };

  // Function to handle the modal's "Assign" button click
  const handleAssignClick = () => {
    // Perform the necessary database updates here
    // For simplicity, just log the selected values for now
    console.log("Selected Delivery Man:", selectedDeliveryMan);
    console.log("Selected Delivery Date:", selectedDeliveryDate);

    // Close the modal
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="h-screen">
        <Lottie className="h-full" animationData={animation}></Lottie>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>User's Name</th>
              <th>User's Phone</th>
              <th>Booking Date</th>
              <th>Requested Delivery Date</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((parcel, index) => (
              <tr key={parcel.id}>
                <td>{index + 1}</td>
                <td>{parcel.name}</td>
                <td>{parcel.phoneNumber}</td>
                {/* <td>{parcel.bookingDate}</td> */}
                <td>{new Date(parcel.bookingDate).toLocaleDateString()}</td>
                <td>{parcel.requestedDeliveryDate}</td>
                <td>{parcel.price}</td>
                <td>{parcel.status}</td>
                <td>
                  <button
                    className="p-2 bg-gray-200 text-lg rounded-lg"
                    onClick={handleManageClick}
                  >
                    <MdOutlineManageAccounts />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for managing parcels */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Manage Parcel</h2>
            <label>
              Select Delivery Man:
              <select
                value={selectedDeliveryMan}
                onChange={(e) => setSelectedDeliveryMan(e.target.value)}
              >
                {/* Map over the array of delivery men and create options */}
                <option value="">Select Delivery Man</option>
                {/* Replace this with the actual array of delivery men */}
                {[
                  { id: "1", name: "Delivery Man 1" },
                  { id: "2", name: "Delivery Man 2" },
                ].map((deliveryMan) => (
                  <option key={deliveryMan.id} value={deliveryMan.id}>
                    {deliveryMan.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Select Delivery Date:
              <input
                type="date"
                value={selectedDeliveryDate}
                onChange={(e) => setSelectedDeliveryDate(e.target.value)}
              />
            </label>
            <button onClick={handleAssignClick}>Assign</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllParcels;
