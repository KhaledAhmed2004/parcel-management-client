// import Lottie from "lottie-react";
// import animation from "../../../assets/animations/deliveryAnimation.json";
// import toast from "react-hot-toast";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useNavigate } from "react-router-dom";

// const BookParcel = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   const axios = useAxiosSecure();

//   const [parcelWeight, setParcelWeight] = useState("");

//   const handleWeightChange = (e) => {
//     setParcelWeight(e.target.value);
//   };

//   const calculatePrice = () => {
//     if (parcelWeight === "1") {
//       return 50;
//     } else if (parcelWeight === "2") {
//       return 100;
//     } else if (parseInt(parcelWeight) > 2) {
//       return 150;
//     } else {
//       return 0;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = user?.email;
//     const name = user?.displayName;
//     const phoneNumber = form.phoneNumber.value;
//     const parcelType = form.parcelType.value;
//     const receiverName = form.receiverName.value;
//     const receiverPhoneNumber = form.receiverPhoneNumber.value;
//     const parcelDeliveryAddress = form.parcelDeliveryAddress.value;
//     const requestedDeliveryDate = form.requestedDeliveryDate.value;
//     const deliveryAddressLatitude = form.deliveryAddressLatitude.value;
//     const deliveryAddressLongitude = form.deliveryAddressLongitude.value;
//     const price = calculatePrice();

//     const info = {
//       email,
//       name,
//       phoneNumber,
//       parcelType,
//       parcelWeight,
//       receiverName,
//       receiverPhoneNumber,
//       parcelDeliveryAddress,
//       requestedDeliveryDate,
//       deliveryAddressLatitude,
//       deliveryAddressLongitude,
//       price,
//       status: "pending",
//     };

//     const toastId = toast.loading("Adding parcel...");
//     try {
//       const send = await axios.post("/bookParcel", info);
//       console.log(send);
//       if (send?.data?.acknowledged) {
//         toast.success("Parcel added successfully!", { id: toastId });
//       }
//       navigate("/dashBoard/myParcels");
//     } catch (error) {
//       toast.error(error.message, { id: toastId });
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <h1 className="my-7 text-center font-semibold text-3xl">
//         Book Your Parcel
//       </h1>
//       <div className="p-4 md:p-0 my-10 md:h-[620px] mx-auto relative flex items-center flex-col md:flex-row lg:w-full lg:max-w-[70rem] w-[22rem] md:w-[44rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//         <div className="p-10 relative w-full flex- md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border bg-center bg-cover">
//           <Lottie animationData={animation}></Lottie>
//         </div>

//         <div className="pr-5 space-y-3 flex-1">
//           <form onSubmit={handleSubmit}>
//             {/* User Info Section */}
//             <div className="flex gap-3">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Your Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={user?.email}
//                   placeholder="Your Email"
//                   className="input input-bordered w-full"
//                   readOnly
//                 />
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Your Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={user?.displayName}
//                   placeholder="Your Name"
//                   className="input input-bordered w-full"
//                   readOnly
//                 />
//               </div>
//             </div>

//             {/* Parcel Info Section */}
//             <div className="flex gap-3">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Phone Number</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="phoneNumber"
//                   placeholder="Your Phone Number"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Parcel Type</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="parcelType"
//                   placeholder="Parcel Type"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Parcel Weight</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="parcelWeight"
//                   placeholder="Parcel Weight (in kg)"
//                   className="input input-bordered w-full"
//                   value={parcelWeight}
//                   onChange={handleWeightChange}
//                   required
//                 />
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Receiver's Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="receiverName"
//                   placeholder="Receiver's Name"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Receiver's Phone Number</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="receiverPhoneNumber"
//                   placeholder="Receiver's Phone Number"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Parcel Delivery Address</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="parcelDeliveryAddress"
//                   placeholder="Parcel Delivery Address"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Requested Delivery Date</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="requestedDeliveryDate"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Delivery Address Latitude</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="deliveryAddressLatitude"
//                   placeholder="Delivery Address Latitude"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Delivery Address Longitude</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="deliveryAddressLongitude"
//                   placeholder="Delivery Address Longitude"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Price</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="price"
//                   value={`৳ ${calculatePrice()}`}
//                   className="input input-bordered w-full text-xl"
//                   readOnly
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="md:mt-7 flex justify-center md:w-[80%] mx-auto bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
//               >
//                 Book Parcel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookParcel;
import Lottie from "lottie-react";
import animation from "../../../assets/animations/deliveryAnimation.json";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const BookParcel = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axios = useAxiosSecure();

  const [parcelWeight, setParcelWeight] = useState("");

  const handleWeightChange = (e) => {
    setParcelWeight(e.target.value);
  };

  const calculatePrice = () => {
    if (parcelWeight === "1") {
      return 50;
    } else if (parcelWeight === "2") {
      return 100;
    } else if (parseInt(parcelWeight) > 2) {
      return 150;
    } else {
      return 0;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const phoneNumber = form.phoneNumber.value;
    const parcelType = form.parcelType.value;
    const receiverName = form.receiverName.value;
    const receiverPhoneNumber = form.receiverPhoneNumber.value;
    const parcelDeliveryAddress = form.parcelDeliveryAddress.value;
    const requestedDeliveryDate = form.requestedDeliveryDate.value;
    const deliveryAddressLatitude = form.deliveryAddressLatitude.value;
    const deliveryAddressLongitude = form.deliveryAddressLongitude.value;
    const price = calculatePrice();
    const bookingDate = new Date();

    const info = {
      email,
      name,
      phoneNumber,
      parcelType,
      parcelWeight,
      receiverName,
      receiverPhoneNumber,
      parcelDeliveryAddress,
      requestedDeliveryDate,
      deliveryAddressLatitude,
      deliveryAddressLongitude,
      price,
      status: "pending",
      bookingDate,
    };

    const toastId = toast.loading("Adding parcel...");
    try {
      const send = await axios.post("/bookParcel", info);
      console.log(send);
      if (send?.data?.acknowledged) {
        toast.success("Parcel added successfully!", { id: toastId });
      }
      navigate("/dashBoard/myParcels");
    } catch (error) {
      toast.error(error.message, { id: toastId });
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="my-7 text-center font-semibold text-3xl">
        Book Your Parcel
      </h1>
      <div className="p-4 md:p-0 my-10 md:h-[620px] mx-auto relative flex items-center flex-col md:flex-row lg:w-full lg:max-w-[70rem] w-[22rem] md:w-[44rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-10 relative w-full flex- md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border bg-center bg-cover">
          <Lottie animationData={animation}></Lottie>
        </div>

        <div className="pr-5 space-y-3 flex-1">
          <form onSubmit={handleSubmit}>
            {/* User Info Section */}
            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
            </div>

            {/* Parcel Info Section */}
            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Parcel Type</span>
                </label>
                <input
                  type="text"
                  name="parcelType"
                  placeholder="Parcel Type"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Parcel Weight</span>
                </label>
                <input
                  type="number"
                  name="parcelWeight"
                  placeholder="Parcel Weight (in kg)"
                  className="input input-bordered w-full"
                  value={parcelWeight}
                  onChange={handleWeightChange}
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Receiver's Name</span>
                </label>
                <input
                  type="text"
                  name="receiverName"
                  placeholder="Receiver's Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Receiver's Phone Number</span>
                </label>
                <input
                  type="number"
                  name="receiverPhoneNumber"
                  placeholder="Receiver's Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Parcel Delivery Address</span>
                </label>
                <input
                  type="text"
                  name="parcelDeliveryAddress"
                  placeholder="Parcel Delivery Address"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Requested Delivery Date</span>
                </label>
                <input
                  type="date"
                  name="requestedDeliveryDate"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Delivery Address Latitude</span>
                </label>
                <input
                  type="text"
                  name="deliveryAddressLatitude"
                  placeholder="Delivery Address Latitude"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Delivery Address Longitude</span>
                </label>
                <input
                  type="text"
                  name="deliveryAddressLongitude"
                  placeholder="Delivery Address Longitude"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={`৳ ${calculatePrice()}`}
                  className="input input-bordered w-full text-xl"
                  readOnly
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="md:mt-7 flex justify-center md:w-[80%] mx-auto bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
              >
                Book Parcel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookParcel;
