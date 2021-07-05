import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFormStepSubmit from "../hooks/useFormStepSubmit";

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = useFormStepSubmit("/step2");
  return (
    <>
      <Link to="/help">Help?</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Card Number</h3>
        <div>
          <input
            {...register("cardNumber", {
              required: true,
              pattern: { value: /^[0-9]*$/, message: "Only numbers!" },
            })}
          />
          {errors.cardNumber && errors.cardNumber.type === "required" && (
            <span>This is required</span>
          )}
          {errors?.cardNumber?.message && (
            <span>{errors.cardNumber.message}</span>
          )}
        </div>
        <h3>Select Country</h3>
        <div>
          <select {...register("country", { required: true })}>
            <option value="ua">Ukraine</option>
            <option value="usa">United States</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Step1;
