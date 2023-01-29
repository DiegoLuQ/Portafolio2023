import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Video = ({ url_video, url_img, titulo, detalle, categories }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (categories) {
      setCategory(categories);
    }
  }, [categories]);
  return (
    <div className="bg-black grid sm:grid-cols-2 items-center">
      <a href={url_video} className="">
        <img
          src={url_img}
          alt=""
          width="250"
          className="hidden sm:flex hover:hue-rotate-30 hover:saturate-200"
        />
      </a>
      <div className="mt-2">
        <a href="https://www.youtube.com/">
          <h3 className="hover:secondary">{titulo}</h3>
        </a>
        <div className="p-description m-2">
          {detalle}
          <hr />
          <div className="flex flex-wrap gap-2 justify-end mt-1 md:flex-row">
            
            {category.map((item, i) => (
              
              <Link key={i} className="italic text-xs text-gray-500 hover:text-[#00a675]">
                {item} 
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
