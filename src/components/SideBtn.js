import React from "react";

const SideBtn = ({ title, icon }) => {
  return (
    <div className="text-gray-600 flex items-center gap-2">
      {icon}
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default SideBtn;
