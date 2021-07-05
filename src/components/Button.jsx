import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 35px;
  background-color: #007aff;
  font-size: 1.2em;
  color: white;
  border-radius: 25px;
  border-color: #007aff;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    color: #007aff;
    cursor: pointer;
  }
`;

const Button = ({ onClickHandler, text }) => (
  <StyledButton type="button" onClick={onClickHandler}>
    {text}
  </StyledButton>
);

export default Button;
