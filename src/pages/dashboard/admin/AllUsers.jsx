import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";

const AllUsers = () => {
  const axios = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`/allUsers`);
      return res.data;
    },
  });

  const makeDeliveryMen = async (userId) => {
    try {
      await axios.put(`/user/updateRole/${userId}`, {
        userType: "deliveryMan",
      });
      refetch();
      queryClient.invalidateQueries(["users"]);
    } catch (error) {
      console.error("Error making Delivery Men:", error);
    }
  };

  const makeAdmin = async (userId) => {
    try {
      await axios.put(`/user/updateRole/${userId}`, { userType: "admin" });
      refetch();
      queryClient.invalidateQueries(["users"]);
    } catch (error) {
      console.error("Error making Admin:", error);
    }
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
              <th>User Type</th>
              <th>Make Delivery Men</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={user?.email}>
                <th>{index + 1}</th>
                <td>{user?.userName}</td>
                <td>{user?.phoneNumber}</td>
                <td>{user?.numberOfParcelsBooked}</td>
                <td>{user?.totalSpentAmount}</td>
                <td>{user?.userType}</td>
                <td>
                  {user?.userType !== "deliveryMan" && (
                    <button
                      className="p-2 bg-gray-200 text-lg rounded-lg flex items-center gap-1 justify-center"
                      onClick={() => makeDeliveryMen(user?.email)}
                    >
                      <MdOutlineDeliveryDining />
                      <span className="text-sm">DeliveryMan</span>
                    </button>
                  )}
                </td>
                <td>
                  {user?.userType !== "admin" && (
                    <button
                      className="p-2 bg-gray-200 text-lg rounded-lg flex items-center gap-1 justify-center"
                      onClick={() => makeAdmin(user?.email)}
                    >
                      <MdOutlineAdminPanelSettings />{" "}
                      <span className="text-sm">Admin</span>
                    </button>
                  )}
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
