import { FaBoxOpen } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi";
import MenuItem from "../MenuItem";
import { LuUsers2 } from "react-icons/lu";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={GiCardboardBoxClosed}
        label="All Parcels"
        address="bookParcel"
      />
      <MenuItem
        icon={MdOutlineDeliveryDining}
        label="All Delivery Men"
        address="myParcels"
      />
      <MenuItem icon={LuUsers2} label=" All Users" address="allUsers" />
    </>
  );
};

export default AdminMenu;
