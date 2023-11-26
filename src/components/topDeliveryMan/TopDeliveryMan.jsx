import DeliveryManCard from "./DeliveryManCard";

const TopDeliveryMan = () => {
  return (
    <div className="py-10">
      <h2 className="text-5xl font-semibold text-center">Top Delivery Man</h2>
      <div className="flex items-center justify-center flex-wrap px-36 gap-10 py-10">
        <DeliveryManCard></DeliveryManCard>
        <DeliveryManCard></DeliveryManCard>
        <DeliveryManCard></DeliveryManCard>
        <DeliveryManCard></DeliveryManCard>
        <DeliveryManCard></DeliveryManCard>
      </div>
    </div>
  );
};

export default TopDeliveryMan;
