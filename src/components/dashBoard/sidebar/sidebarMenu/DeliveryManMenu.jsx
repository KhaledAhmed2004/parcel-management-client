import MenuItem from "../MenuItem";
import { LuClipboardList } from "react-icons/lu";
import { GoCodeReview } from "react-icons/go";

const DeliveryManMenu = () => {
  return (
    <>
      <MenuItem
        icon={LuClipboardList}
        label="My Delivery List"
        address="bookParcel"
      />
      <MenuItem icon={GoCodeReview} label="My Reviews" address="myParcels" />
    </>
  );
};

export default DeliveryManMenu;
