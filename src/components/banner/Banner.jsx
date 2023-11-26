import Lottie from "lottie-react";
import { IoMdSearch } from "react-icons/io";
import bannerAnimation from "../../assets/animations/deliveryAnimation.json";
const Banner = () => {
  return (
    <div className="h-[36rem] flex md:flex-row  flex-col items-center">
      <div className="w-[70%]">
        <h1 className="text-4xl font-bold pb-6">
          Booking Simplicity, Delivery Precision, Management Ease – Your
          Seamless Logistics Partner!
        </h1>
        <form className="w-[50%] relative">
          <div className="relative">
            <input
              style={{
                boxShadow: `
                -2px -2px 8px rgba(255, 255, 255, 1),
                -2px -2px 12px rgba(255, 255, 255, 0.5),
                inset 2px 2px 4px rgba(255, 255, 255, 0.1),
                2px 2px 8px rgba(0, 0, 0, 0.15)
              `,
              }}
              type="search"
              placeholder="Search..."
              className="w-full p-4 rounded-xl border-2 outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-[.6rem] text-2xl bg-gray-400 text-white p-2 rounded-xl"
            >
              <IoMdSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="h-full">
        <Lottie className="h-full" animationData={bannerAnimation} />
      </div>
    </div>
  );
};

export default Banner;
