import { FaBoxOpen } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi";
import MenuItem from "../MenuItem";
import { LuUsers2 } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" />
      <MenuItem
        icon={GiCardboardBoxClosed}
        label="All Parcels"
        address="appParcels"
      />
      <MenuItem
        icon={MdOutlineDeliveryDining}
        label="All Delivery Men"
        address="allDeliveryMan"
      />
      <MenuItem icon={LuUsers2} label="All Users" address="allUsers" />
    </>
  );
};

export default AdminMenu;
