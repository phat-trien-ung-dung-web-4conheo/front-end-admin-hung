import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../components/Input";

//YUP VALIDATION
const schema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup.number().required("price is required"),
  desc: yup.string().required("price is required"),
  size: yup.string().required("price is required"),
});

const NewProduct = () => {
  // Add formik and yup for validate the form
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClickSubmit = (value) => {
    console.log("ok ", value);
  };
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">New Product</h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleClickSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            {...register("title")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <Input
            type="text"
            id="price"
            placeholder="Enter price"
            register={register("price")}
          ></Input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter description"
            {...register("desc")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        {/* Make the array sizes product for this one  */}
        <div className="flex flex-col gap-2">
          <label htmlFor="size">size</label>
          <input
            type="text"
            name="size"
            id="size"
            {...register("size")}
            placeholder="Enter size"
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
        {/* Connect to firebase storage to store image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image">image</label>
          <input
            type="file"
            name="image"
            id="image"
            {...register("image")}
            className="p-3 border border-[#ccc] rounded-lg "
          />
        </div>
      </form>
    </section>
  );
};

export default NewProduct;
