import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";

const Task = ({ task }) => {
  const { deleteItem, findItemById } = useContext(GlobalContext);

  return (
    <>
      <Table>
        <tr>
          <Column>{task.taskTitle}</Column>
          <th>
            <Icon
              onClick={() => deleteItem(task.id)}
              className="fa fa-trash"
            ></Icon>
            <Icon
              onClick={() => findItemById(task.id)}
              className="fa fa-edit"
            ></Icon>
          </th>
        </tr>
      </Table>
    </>
  );
};

export default Task;
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
