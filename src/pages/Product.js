import React from "react";
import PublishIcon from "@mui/icons-material/Publish";
import Chart from "../components/Chart";
const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",

    Sales: 1000,
  },
  {
    name: "Mar",

    Sales: 2000,
  },
];
const Product = () => {
  return (
    <section className="flex flex-col gap-5 mt-5">
      <section className="flex gap-3 ">
        <div className="flex-[2] ">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sale performance"
          ></Chart>
        </div>
        <div className="flex flex-col gap-3 flex-[3] shadow-[0px_1px_9px_-1px_#000000] p-2 rounded-sm">
          <div className="flex gap-2 items-center">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
              alt=""
              className="rounded-full w-8 h-8"
            />
            <p className="font-bold">Apple Airpods</p>
          </div>
          <div className="w-28">
            <ul className="list-none flex justify-between">
              <li className="">id:</li>
              <li>123</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="">id:</li>
              <li>123</li>
            </ul>
            <ul className="list-none flex justify-between">
              <li className="">id:</li>
              <li>123</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-between shadow-[0px_1px_9px_-1px_#000000] p-2 rounded-sm">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-gray-400">Product Name</h2>
          <p className="text-sm font-bold text-gray-400 pb-1 border-gray-400 border-b">
            Apple airpod
          </p>
          <div className="">
            <label>In stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-24 h-24 object-cover mr-5 rounded-lg "
            />
            <label htmlFor="file">
              <PublishIcon></PublishIcon>{" "}
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="px-3 py-2 text-white rounded-lg bg-blue-500">
            Update
          </button>
        </div>
      </section>
    </section>
  );
};

export default Product;
