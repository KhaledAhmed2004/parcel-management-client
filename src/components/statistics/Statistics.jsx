import { FaRegUser } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";

import CountUp from "react-countup";
const Statistics = () => {
  return (
    <div className="">
      <h2 className="text-5xl text-center font-semibold pb-9">Statistics</h2>
      <div className="flex items-center gap-16 px-28">
        <div
          style={{
            boxShadow: `
    -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.15)
  `,
          }}
          className="h- flex-1 space-y-3 p-4"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MdOutlinePostAdd /> Parcel Booked: <CountUp end={100} />
          </h2>
        </div>
        <div
          style={{
            boxShadow: `
    -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.15)
  `,
          }}
          className="flex-1 p-4"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <TbTruckDelivery /> Parcel Delivered: <CountUp end={100} />
          </h2>
        </div>
        <div
          style={{
            boxShadow: `
    -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.15)
  `,
          }}
          className="h- flex-1 space-y-3 p-4"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaRegUser /> Total Users: <CountUp end={100} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
