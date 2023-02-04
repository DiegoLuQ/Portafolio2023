import React from "react";
import Videos from "../../organismos/Videos";

const VideoBlogs = () => {
  const cantidad = 2
  return (
    <section className="relative my-10">
      <div className="flex flex-col">
        <h2 className="m-auto text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-teal-400 to-[#01a50f] py-2.5">
          Videos
        </h2>
        <Videos cantidad={2}/>

        <div className="absolute w-full h-full bg-gradient-to-t from-[#06ff9725] to-[#01239444] z-[-10] blur-sm"></div>

      </div>
    </section>
  );
};

export default VideoBlogs;
