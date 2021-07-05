import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Prompt } from "react-router-dom";
import { useSelector } from "react-redux";
import useFormStepSubmit from "../hooks/useFormStepSubmit";

const Step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const country = useSelector((state) => state.form.data.country);
  const onSubmit = useFormStepSubmit("/result");
  useEffect(() => {}, []);
  return (
    <>
      <Link to="/help">Help?</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>{country === "ua" ? "Postal Code" : "ZIP"}</h3>
        </div>
        <input {...register("postalCode", { required: true })} />
        {errors.postalCode && errors.postalCode.type === "required" && (
          <span>This is required</span>
        )}
        <input type="submit" />
      </form>
      <Prompt when message="Are you sure you want to leave?" />
    </>
  );
};

export default Step2;
