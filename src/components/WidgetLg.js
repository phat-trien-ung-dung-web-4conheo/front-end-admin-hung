import React from "react";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`btn-widgetLg-${type}`}>{type}</button>;
  };
  return (
    <div className="flex-[2] shadow-[0px_1px_9px_-1px_#000000] p-4">
      <h2 className="text-xl font-semibold">Lastest transactions</h2>
      <table className="border-separate border-spacing-y-5 w-full">
        <tr className="text-left">
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className="flex gap-2 items-center">
            <img
              className="rounded-full h-10 w-10 cursor-pointer"
              src="
          https://source.unsplash.com/featured/300x201
          "
              alt=""
            />
            <span className="font-bold">Anna Keller</span>
          </td>
          <td>2 Jun 2023</td>
          <td>$122.1</td>
          <td>
            <Button type="approved"></Button>
          </td>
        </tr>
        <tr>
          <td className="flex gap-2 items-center">
            <img
              className="rounded-full h-10 w-10 cursor-pointer"
              src="
          https://source.unsplash.com/featured/300x201
          "
              alt=""
            />
            <span className="font-bold">Anna Keller</span>
          </td>
          <td>2 Jun 2023</td>
          <td>$122.1</td>
          <td>
            <Button type="pending"></Button>
          </td>
        </tr>
        <tr>
          <td className="flex gap-2 items-center">
            <img
              className="rounded-full h-10 w-10 cursor-pointer"
              src="
          https://source.unsplash.com/featured/300x201
          "
              alt=""
            />
            <span className="font-bold">Anna Keller</span>
          </td>
          <td>2 Jun 2023</td>
          <td>$122.1</td>
          <td>
            <Button type="declined"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
