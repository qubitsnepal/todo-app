import React from "react";
import styled from "styled-components";

interface Props{
  children:string;
}

const ErrorMsg:React.FC<Props> = (props) => {
  return <Error>{props.children}</Error>;
};


const Error = styled.div`
  color: red;
`;


export default ErrorMsg;