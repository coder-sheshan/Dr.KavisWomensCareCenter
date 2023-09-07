import React from "react";
import Paro from '../Assets/paro.jpg';

const Paronama = () => {
  return (
    <div>
      <div className="flex flex-col">
        <img
          src={Paro}
          alt="basic"
          className="object-cover w-full h-40 "
        />
      </div>
    </div>
  );
};

export default Paronama;
