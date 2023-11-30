import { FaBoxOpen } from "react-icons/fa6";
import { GiCardboardBoxClosed } from "react-icons/gi";
import MenuItem from "../MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={FaBoxOpen} label="Book a Parcel" address="bookParcel" />
      <MenuItem
        icon={GiCardboardBoxClosed}
        label="My Parcels"
        address="myParcels"
      />
    </>
  );
};

export default UserMenu;
