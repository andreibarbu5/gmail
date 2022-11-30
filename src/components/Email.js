import React from "react";

const Email = ({ expeditor, messageTitle, message, timestamp }) => {
  return (
    <div className="flex justify-between border-b py-1.5 px-6 bg-gray-100">
      <p className="w-[8rem] font-bold  "> {expeditor}</p>
      <div className="flex items-center w-[16rem] sm:w-[30rem] truncate   lg:w-[40rem]">
        <p className="font-semibold  ">{messageTitle} -</p>
        <p className="pl-1 text-gray-500 truncate"> {message}</p>
      </div>

      <p className="text-gray-500 w-[6rem] text-end">{timestamp}</p>
    </div>
  );
};

export default Email;
