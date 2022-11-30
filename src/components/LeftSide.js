import React from "react";

import { BsPencilSquare } from "react-icons/bs";
import { FaInbox, FaStar } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import SideBtn from "./SideBtn";

const LeftSide = () => {
  const buttons = [
    { icon: <FaInbox className="w-[1.7rem]  h-[1.7rem]" />, title: "Inbox" },
    { icon: <FaStar className="w-[1.7rem]  h-[1.7rem]" />, title: "Favorite" },
    {
      icon: <MdLabelImportant className="w-[1.7rem]  h-[1.7rem]" />,
      title: "Important",
    },
    { icon: <FaInbox className="w-[1.7rem]  h-[1.7rem]" />, title: "Inbox" },
    { icon: <FaStar className="w-[1.7rem]  h-[1.7rem]" />, title: "Favorite" },
    {
      icon: <MdLabelImportant className="w-[1.7rem]  h-[1.7rem]" />,
      title: "Important",
    },
    { icon: <FaInbox className="w-[1.7rem]  h-[1.7rem]" />, title: "Inbox" },
    { icon: <FaStar className="w-[1.7rem]  h-[1.7rem]" />, title: "Favorite" },
    {
      icon: <MdLabelImportant className="w-[1.7rem]  h-[1.7rem]" />,
      title: "Important",
    },
    { icon: <FaInbox className="w-[1.7rem]  h-[1.7rem]" />, title: "Inbox" },
    { icon: <FaStar className="w-[1.7rem]  h-[1.7rem]" />, title: "Favorite" },
    {
      icon: <MdLabelImportant className="w-[1.7rem]  h-[1.7rem]" />,
      title: "Important",
    },
  ];
  return (
    <div className="hidden lg:block w-[15rem] p-4 sticky top-20 h-full">
      {/* Write Message */}
      <div className="flex items-center justify-center     rounded-full h-14 w-36 shadow-sm  shadow-gray-600">
        <BsPencilSquare className="w-5 h-5 mr-2" />
        <p>Compose</p>
      </div>
      {/* Buttons */}
      <div className="pl-6 pt-4 space-y-6">
        {buttons.map((button) => (
          <SideBtn icon={button.icon} title={button.title} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
