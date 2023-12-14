import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Review = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((reviewsData) => {
        setData(reviewsData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center font-semibold pb-9">Reviews</h2>
      <Marquee>
        {" "}
        {data.map((review, index) => (
          <div
            key={index}
            className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
          >
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <img
                src={review.img}
                alt={review.name}
                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {review.name}
                  </h5>
                  <div className="flex items-center gap-0 5"></div>
                </div>
              </div>
            </div>

            <div className="p-0 mb-6">
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Review;
