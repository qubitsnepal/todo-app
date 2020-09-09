import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";

const Task = ({ task }) => {
  const { deleteItem, findItemById } = useContext(GlobalContext);

  return (
    <>
      <Table>
        <Trow>
          <Column>{task.inputList}</Column>
          <Column>
            <Icon
              onClick={() => deleteItem(task.id)}
              className="fa fa-trash"
            ></Icon>
            <Icon
              onClick={() => findItemById(task.id)}
              className="fa fa-edit"
            ></Icon>
          </Column>
        </Trow>
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
const Trow = styled.tr`
  display: flex;
  justify-content: space-between;
`;
