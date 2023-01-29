import React from "react";

function Filtro({titulo}) {
  const handleFilter = (e) => {
    const dato = e.target.value
    console.log(dato)
  }
  return (
    <div className="">
      <button onClick={handleFilter} className="ml-3 text-md text-white font-xs sm:font-semibold font-mono hover:primary" value={titulo}>
        {titulo}
      </button>
    </div>
  );
}

export default Filtro;
