import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const FeaturedInfo = () => {
  return (
    <div className="py-4 px-3 shadow-[0px_1px_9px_-1px_#000000] flex-[2] text-lg flex flex-col gap-2">
      <h2 className="">Revenue</h2>
      <p className="flex items-center gap-3">
        <span className="inline-block text-xl font-bold">$2,415</span>
        <p className="flex items-center text-sm">
          <span className="inline-block">-11,4</span>
          <ArrowDownwardIcon className="text-red-500 !text-base inline-block"></ArrowDownwardIcon>{" "}
        </p>
      </p>
      <p className="text-[#979797] text-sm font-semibold">
        Compared to last month{" "}
      </p>
    </div>
  );
};

export default FeaturedInfo;
