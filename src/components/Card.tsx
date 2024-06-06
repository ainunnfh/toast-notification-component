"use client";
import React, { useState } from "react";
import Toast from "./Toast";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md ">
          <div className="flex flex-col gap-2 ">
            <button
              onClick={handleClick}
              className="bg-green-500 text-center p-1 w-44 text-md text-white font-semibold rounded-sm"
            >
              {isOpen ? "Success" : "Success"}
            </button>
            <button className="bg-blue-500 p-1 text-md text-center text-white font-semibold rounded-sm">
              Info
            </button>
            <button className="bg-orange-500  p-1 text-md text-center text-white font-semibold rounded-sm">
              Warning
            </button>
            <button className="bg-red-500 p-1 text-md text-center text-white font-semibold rounded-sm">
              Error
            </button>
          </div>
        </div>

        <div  className="absolute top-4 right-4">

        {isOpen && <Toast />}
        </div>

      </div>
    </>
  );
};

export default Card;