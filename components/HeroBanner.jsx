import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative">
      <img src="/heroBanner.png" alt="Example Image" className="w-full h-[360px] sm:h-[470px] object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
        <p className="text-white text-center text-2xl sm:text-6xl font-bold tracking-wider">
          Nothing can stop <br></br> you
        </p>
        <button className="w-[180px] bg-white shadow-custom-shadow text-customRed p-4 text-sm uppercase font-bold mt-6">Find Out More</button>
      </div>
    </div>
  );
};

export default HeroBanner;
