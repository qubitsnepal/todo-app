import React from "react";
import Task from "./Task";
import styled from "styled-components";

const TaskList = ({ task }) => {
  return (
    <>
      <Wrapper>
        <Task task={task} />
      </Wrapper>
    </>
  );
};

export default TaskList;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
