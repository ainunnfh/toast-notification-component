import React from "react";
import CardInfo from "./CardInfo";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md ">
        <div className="flex flex-col gap-2 ">
          <div className="bg-green-500 text-center p-1 w-44 text-md text-white font-semibold">Success</div>
          <div className="bg-blue-500 p-1 text-md text-center text-white font-semibold">Info</div>
          <div className="bg-orange-500  p-1 text-md text-center text-white font-semibold">Warning</div>
          <div className="bg-red-500 p-1 text-md text-center text-white font-semibold">Error</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
