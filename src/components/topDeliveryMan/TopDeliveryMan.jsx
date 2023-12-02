import Lottie from "lottie-react";
import DeliveryManCard from "./DeliveryManCard";
import animation from "../../assets/animations/deliveryAnimation.json";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TopDeliveryMan = () => {
  const axios = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myParcels"],
    queryFn: async () => {
      const res = await axios.get(`/allDeliveryMan`);
      return res.data;
    },
  });
  if (isLoading)
    return (
      <div className="h-screen">
        <Lottie className="h-full" animationData={animation}></Lottie>
      </div>
    );
  return (
    <div className="py-10">
      <h2 className="text-5xl font-semibold text-center">Top Delivery Man</h2>
      <div className="grid grid-cols-3 items-center justify-center px-36 gap-10 py-10">
        {data.map((deliveryMan) => (
          <DeliveryManCard
            key={deliveryMan._id}
            deliveryMan={deliveryMan}
          ></DeliveryManCard>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;
