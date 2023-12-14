const WhyChoseUs = () => {
  return (
    <div className="relative">
      <h2 className="text-5xl font-semibold text-center py-8">Why Choose Us</h2>
      <div
        className="h-[330px] relative"
        style={{
          //   backgroundImage: `url(${img})`,
          backgroundImage: `url(https://i.ibb.co/wBDhm0L/Pngtree-delivery-banner-poster-background-921964.jpg)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-xl font-bold">
          <p className="bg-gray-800 bg-opacity-50 p-4 ">
            Discover the unparalleled convenience of{" "}
            <span className="font-bold text-2xl">Let's Deliver</span> for your
            parcel management needs. With a focus on efficiency, reliability,
            and personalized service, we ensure timely deliveries and seamless
            tracking. Our dedicated team, coupled with advanced technology,
            guarantees a hassle-free experience. Choose us for unparalleled
            reliability in the world of parcel management, where your
            satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
