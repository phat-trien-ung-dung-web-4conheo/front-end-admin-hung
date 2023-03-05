import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
const WidgetSm = () => {
  return (
    <div className="flex-1 shadow-[0px_1px_9px_-1px_#000000] p-4">
      <h2 className="text-xl font-semibold pb-3">New Join Members</h2>
      <ul className="flex flex-col gap-3">
        <li className="flex gap-2 items-center ">
          <img
            className="rounded-full h-10 w-10 cursor-pointer"
            src="
          https://source.unsplash.com/featured/300x201
          "
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">Anna Keller</span>
            <span className="text-[#848484]">Software Engineer</span>
          </div>
          <button className="ml-auto px-2 py-1 flex items-center gap-1 border rounded-lg bg-[#dcdae5] text-[#606063]">
            <VisibilityIcon className="!text-base"></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="flex gap-2 items-center ">
          <img
            className="rounded-full h-10 w-10 cursor-pointer"
            src="
          https://source.unsplash.com/featured/300x201
          "
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">Anna Keller</span>
            <span className="text-[#848484]">Software Engineer</span>
          </div>
          <button className="ml-auto px-2 py-1 flex items-center gap-1 border rounded-lg bg-[#dcdae5] text-[#606063]">
            <VisibilityIcon className="!text-base"></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="flex gap-2 items-center ">
          <img
            className="rounded-full h-10 w-10 cursor-pointer"
            src="
          https://source.unsplash.com/featured/300x201
          "
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">Anna Keller</span>
            <span className="text-[#848484]">Software Engineer</span>
          </div>
          <button className="ml-auto px-2 py-1 flex items-center gap-1 border rounded-lg bg-[#dcdae5] text-[#606063]">
            <VisibilityIcon className="!text-base"></VisibilityIcon>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
