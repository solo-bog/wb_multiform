import React from "react";
import { useForm } from "react-hook-form";
import useFormStepSubmit from "../hooks/useFormStepSubmit";

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = useFormStepSubmit("/step2");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Card Number</h3>
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
      <div>
        <h3>Select Country</h3>
        <select {...register("country", { required: true })}>
          <option value="ua">Ukraine</option>
          <option value="usa">United States</option>
        </select>
      </div>

      <input type="submit" />
    </form>
  );
};

export default Step1;
