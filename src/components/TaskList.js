import React from "react";
import styled from "styled-components";

const TodoList = ({ task }) => {
  return (
    <>
      <Wrapper>
        <div>{task.taskTitle}</div>
        <IconWrapper>
          <Icon className="fa fa-trash"></Icon>
          <Icon className="fa fa-edit"></Icon>
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default TodoList;
const Icon = styled.i`
  color: white;
  margin-right: 3rem;
  font-size: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const IconWrapper = styled.div`
  margin-left: 3rem;
`;
