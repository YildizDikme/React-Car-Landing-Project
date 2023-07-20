import React from "react";
import Wrapper from "./Wrapper";

const VideoSection = () => {
  return (
    <div className="bg-customGray h-[650px] sm:h-[954px] mt-12 p-6 text-white text-4xl font-bold">
      <Wrapper>
        <div className="flex flex-col justify-between items-center my-4 sm:flex-row">
          <h2 className="leading-10">
            Feel the excellent wet braking <br /> with Driveways!
          </h2>
          <button className="w-[308px] bg-white shadow-custom-shadow text-customRed p-4 text-sm uppercase font-bold mt-6 hidden sm:block">
            Watch All Videos
          </button>
        </div>
        <div className="mt-14">
          <iframe className="sm:h-[720px] h-[300px]"
            width="100%"
            height="720px"
            src="https://www.youtube.com/embed/DZFhOBKqpBM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button className="w-[308px] bg-white shadow-custom-shadow text-customRed p-4 text-sm uppercase font-bold mt-6 block sm:hidden">
            Watch All Videos
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default VideoSection;
