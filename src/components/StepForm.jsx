import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Title = styled.h1`
  font-size: 1.5em;
`;

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    console.log(currentStep);
  }, [currentStep]);
  const renderButton = () => {
    if (currentStep < 2) {
      return (
        <Button
          onClickHandler={() => setCurrentStep((prev) => prev + 1)}
          text="Next Step"
        />
      );
    }
    if (currentStep === 2) {
      return (
        <Button
          onClickHandler={() => setCurrentStep((prev) => prev + 1)}
          text="Submit"
        />
      );
    }
    return false;
  };
  return (
    <div>
      <Title>{`Step${currentStep}`}</Title>
      {renderButton()}
    </div>
  );
};

export default StepForm;
