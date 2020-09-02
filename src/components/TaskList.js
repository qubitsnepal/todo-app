import React, { useContext, useEffect } from "react";
import Task from "./Task";
import styled from "styled-components";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";

const TaskList = ({ task, formik }) => {
  const { foundItem } = useContext(GlobalContext);
  useEffect(() => {
    foundItem !== null &&
      formik.setFieldValue("inputList", foundItem.taskTitle);
  }, [foundItem]);

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
