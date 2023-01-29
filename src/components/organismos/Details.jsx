import React from "react";
import CardAPI from "../moleculas/CardAPI";
import Description from "../moleculas/Description";

const Details = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      {/* Descripcion de mi */}
      <Description />
      {/* Card de API */}
      <CardAPI />
    </div>
  );
};

export default Details;
