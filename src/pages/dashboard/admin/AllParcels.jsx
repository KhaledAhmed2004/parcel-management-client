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

  const { data: deliveryManData } = useQuery({
    queryKey: ["options"],
    queryFn: async () => {
      const res = await axios.get("/allDeliveryMan");
      return res.data;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParcelId, setSelectedParcelId] = useState(null);
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState("");
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState("");

  const handleManageClick = (parcelId) => {
    console.log("click");
    setSelectedParcelId(parcelId);
    setIsModalOpen(true);
  };

  const handleAssignClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/bookParcel/${selectedParcelId}`, {
        deliveryMan: selectedDeliveryMan,
        deliveryDate: selectedDeliveryDate,
        status: "On The Way",
      });
      console.log("Assign response:", response.data);
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error("Error assigning parcel:", error);
    }
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
                <td>{new Date(parcel.bookingDate).toLocaleDateString()}</td>
                <td>{parcel.requestedDeliveryDate}</td>
                <td>{parcel.price}</td>
                <td>{parcel.status}</td>
                <td>
                  <button
                    className="p-2 bg-gray-200 text-lg rounded-lg"
                    onClick={() => handleManageClick(parcel._id)}
                  >
                    <MdOutlineManageAccounts />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <span
              className="cursor-pointer absolute top-2 right-2 text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <h2 className="text-xl font-semibold mb-4">Manage Parcel</h2>
            <form onSubmit={handleAssignClick}>
              <label className="block mb-2">
                Select Delivery Man:
                <select
                  required
                  className="border p-2 w-full"
                  value={selectedDeliveryMan}
                  onChange={(e) => setSelectedDeliveryMan(e.target.value)}
                >
                  <option value="">Select Delivery Man</option>
                  {deliveryManData.map((deliveryMan) => (
                    <option key={deliveryMan._id} value={deliveryMan._id}>
                      {deliveryMan.userName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block mb-2">
                Select Approximate Delivery Date:
                <input
                  required
                  type="date"
                  className="border p-2 w-full"
                  value={selectedDeliveryDate}
                  onChange={(e) => setSelectedDeliveryDate(e.target.value)}
                />
              </label>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Assign
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllParcels;
