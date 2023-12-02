import Rating from "@mui/material/Rating";

const DeliveryManCard = ({ deliveryMan }) => {
  return (
    <div
      style={{
        boxShadow: `
          -2px -2px 8px rgba(255, 255, 255, 1),
          -2px -2px 12px rgba(255, 255, 255, 0.5),
          inset 2px 2px 4px rgba(255, 255, 255, 0.1),
          2px 2px 8px rgba(0, 0, 0, 0.15)
        `,
      }}
      className="card card-compact bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={deliveryMan.image}
          alt={deliveryMan.userName}
          style={{ width: "100%", height: "auto" }}
        />
      </figure>
      <div className="card-body">
        <h2>Name: {deliveryMan.userName}</h2>
        <h2>Total Delivered: {deliveryMan.totalDelivered}</h2>
        <Rating name="read-only" value={deliveryMan.rating} readOnly />
      </div>
    </div>
  );
};

export default DeliveryManCard;
