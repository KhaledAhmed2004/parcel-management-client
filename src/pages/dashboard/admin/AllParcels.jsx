import { useState } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";

const AllParcels = () => {
  // Sample parcel data, replace this with your actual data fetching logic
  const parcelsData = [
    {
      id: 1,
      userName: "Cy Ganderton",
      userPhone: "123-456-7890",
      bookingDate: "2023-01-01",
      requestedDeliveryDate: "2023-01-10",
      cost: "$20",
      status: "Pending",
    },
    // Add more parcel data as needed
  ];

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

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
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
            {parcelsData.map((parcel) => (
              <tr key={parcel.id}>
                <td>{parcel.userName}</td>
                <td>{parcel.userPhone}</td>
                <td>{parcel.bookingDate}</td>
                <td>{parcel.requestedDeliveryDate}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.status}</td>
                <td>
                  <button onClick={handleManageClick}>Manage</button>
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
