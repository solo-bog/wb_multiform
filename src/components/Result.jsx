import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.form.data);

  return (
    <>
      <h1>Payment succesful!</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
};
export default Result;
