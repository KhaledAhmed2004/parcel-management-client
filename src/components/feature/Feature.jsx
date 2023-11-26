import { IoShieldOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHandshake } from "react-icons/pi";

const Feature = () => {
  return (
    <div className="mb-16">
      <h2 className="text-5xl py-10 text-center font-semibold">Our Features</h2>
      <div className="h-60 flex items-center gap-16 p-28">
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
          <IoShieldOutline className="text-8xl mx-auto" />
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold ">Parcel Safety</h2>
            <p>
              Ensuring parcel safety: sturdy packaging, labeling, tracking, and
              reliable shipping.
            </p>
          </div>
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
          <LiaShippingFastSolid className="text-8xl mx-auto" />
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold ">Super Fast Delivery</h2>
            <p>
              Timely delivery service ensured parcels reached destinations
              promptly and securely.
            </p>
          </div>
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
          <PiHandshake className="text-8xl mx-auto" />
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold ">Trusted</h2>
            <p>
              Reliable and trustworthy, ensuring confidence and dependability in
              every interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
