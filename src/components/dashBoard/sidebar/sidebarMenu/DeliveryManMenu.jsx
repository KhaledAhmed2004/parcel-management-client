import MenuItem from "../MenuItem";
import { LuClipboardList } from "react-icons/lu";
import { GoCodeReview } from "react-icons/go";

const DeliveryManMenu = () => {
  return (
    <>
      <MenuItem
        icon={LuClipboardList}
        label="My Delivery List"
        address="myDeliveryList"
      />
      <MenuItem icon={GoCodeReview} label="My Reviews" address="myReview" />
    </>
  );
};

export default DeliveryManMenu;
