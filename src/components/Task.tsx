import React from "react";
import styled from "styled-components";
import { deleteTask, findItemById } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { Task as TaskType } from "../types/Types"


interface Props{
 task:TaskType
}

const Task:React.FC<Props>= ({ task }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Table>
        <Trow>
          <Column>{task.inputList}</Column>
          <Column>
            <Icon
              onClick={() => dispatch(deleteTask(task.id))}
              className="fa fa-trash"
            ></Icon>
            <Icon
              onClick={() => dispatch(findItemById(task.id))}
              className="fa fa-edit"
            ></Icon>
          </Column>
        </Trow>
      </Table>
    </>
  );
};



const Icon = styled.i`
  color: white;
  padding-left: 10px;

  font-size: 1.5rem;
`;

const Table = styled.table`
  text-align: center;

  width: 94%;
`;
const Column = styled.th`
  width: 300px;
  font-size: 1.5rem;
`;
const Trow = styled.tr`
  display: flex;
  justify-content: space-between;
`;


export default Task;