import React from "react";
import styled from "styled-components";

const ErrorMsg = (props) => {
  return <Error>{props.children}</Error>;
};

export default ErrorMsg;
const Error = styled.div`
  color: red;
`;
