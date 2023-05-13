import React from "react";

const Input = ({ register, type, id, ...rest }) => {
  return (
    <input
      type={type}
      className="p-3 border border-[#ccc] rounded-lg "
      id={id}
      ref={register}
      {...rest}
    />
  );
};

export default Input;
