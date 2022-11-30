import React from "react";
import { BiPlusCircle, BiMoney, BiNews } from "react-icons/bi";
import { BsFillMenuButtonWideFill, BsCardChecklist } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaKeyboard } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { MdPermMedia } from "react-icons/md";
import Category from "./Category";

const Inbox = () => {
  const categories = [
    {
      logo: <IoMailOutline className="w-[1.3rem] h-[1.3rem]  " />,
      title: "Important",
      css: "hover:text-yellow-500 focus:text-yellow-500",
    },
    {
      logo: <MdPermMedia className="w-[1.3rem] h-[1.3rem]" />,
      title: "Media",
      css: "hover:text-purple-500  focus:text-purple-500",
    },
    {
      logo: <BiMoney className="w-[1.3rem] h-[1.3rem]" />,
      title: "Deals",
      css: "hover:text-green-500 focus:text-green-500",
    },
    {
      logo: <BiNews className="w-[1.3rem] h-[1.3rem]" />,
      title: "News",
      css: "hover:text-gray-700 focus:text-gray-700",
    },
    {
      logo: <BsCardChecklist className="w-[1.3rem] h-[1.3rem]" />,
      title: "Chats",
      css: "hover:text-blue-500 focus:text-blue-500 hidden",
    },
  ];
  return (
    <div className="pt-2.5  ">
      {/* Edit */}
      <div className="flex items-center justify-between px-6 text-gray-500 border-b pb-2.5">
        {/* Left Side */}
        <div className="flex items-center gap-8">
          <BiPlusCircle className="w-[1.4rem] h-[1.4rem] " />
          <BsFillMenuButtonWideFill className="w-[1.1rem] h-[1.1rem]" />
          <GoSettings className="w-[1.3rem] h-[1.3rem]" />
        </div>
        {/* Right Side */}
        <div className="flex items-center font-medium gap-8">
          <p className="  ">1-50 of 354</p>
          <HiArrowsRightLeft className="w-5 h-5" />
          <VscFileSubmodule className="w-5 h-5" />
          <FaKeyboard className="w-5 h-5" />
          <RiUserSettingsLine className="w-5 h-5" />
        </div>
      </div>
      {/* Categories */}

      <div className="flex items-center justify-between px-6 border-b py-2 text-gray-500">
        {categories.map((category) => (
          <Category
            logo={category.logo}
            title={category.title}
            css={category.css}
          />
        ))}
      </div>
      {/* Mails */}
    </div>
  );
};

export default Inbox;
