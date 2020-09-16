import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { Task as TaskType } from "../types/Types";

interface Props{
  task:TaskType;
}

const TaskList:React.FC<Props>= ({ task }) => {
  return (
    <>
      <Wrapper>
        <Task task={task} />
      </Wrapper>
    </>
  );
};



const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;


export default TaskList;