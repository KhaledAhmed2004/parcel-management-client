import Rating from "@mui/material/Rating";

const DeliveryManCard = () => {
  return (
    <div>
      <img src="" />
      <div
        style={{
          boxShadow: `
        -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15)
      `,
        }}
        className="p-5 rounded-lg"
      >
        <h2>Name: Khaled</h2>
        <h2>Total Delivered: 100</h2>
        <Rating name="read-only" value={2} readOnly />
      </div>
    </div>
  );
};

export default DeliveryManCard;
