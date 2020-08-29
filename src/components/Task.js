import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";

const Task = ({ task }) => {
  const { deleteItem, findItemById } = useContext(GlobalContext);

  return (
    <>
      <div>{task.taskTitle}</div>
      <IconWrapper>
        <Icon
          onClick={() => deleteItem(task.id)}
          className="fa fa-trash"
        ></Icon>
        <Icon
          onClick={() => findItemById(task.id)}
          className="fa fa-edit"
        ></Icon>
      </IconWrapper>
    </>
  );
};

export default Task;
const Icon = styled.i`
  color: white;
  margin-right: 3rem;
  font-size: 3rem;
`;
const IconWrapper = styled.div`
  margin-left: 3rem;
`;
