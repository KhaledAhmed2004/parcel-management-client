import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../assets/animations/deliveryAnimation.json";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="h-screen">
        <Lottie className="h-full" animationData={animation}></Lottie>
      </div>
    );
  if (user) return children;
  return (
    <Navigate
      to={"/login"}
      state={{ from: location }}
      replace={true}
    ></Navigate>
  );
};

export default PrivetRoute;
