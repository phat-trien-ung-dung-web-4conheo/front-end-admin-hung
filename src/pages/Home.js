import React from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userData } from "../data";
const Home = () => {
  return (
    <div className="flex flex-col gap-4 px-3 ">
      <div className="grid grid-cols-3 gap-6 ">
        <FeaturedInfo></FeaturedInfo>
        <FeaturedInfo></FeaturedInfo>
        <FeaturedInfo></FeaturedInfo>
      </div>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active user"
      ></Chart>
      <div className="flex gap-4 pb-4">
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
};

export default Home;
