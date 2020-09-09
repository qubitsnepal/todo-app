import React from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask, clearAll } from "../features/todoSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorMsg from "./ErrorMsg";
import uuid from "react-uuid";

const MyInput = ({ field, ...props }) => {
  return <Input {...field} {...props} />;
};

const TodoForm = () => {
  const tasks = useSelector((state) => state.tasks);

  const foundItem = useSelector((state) => state.foundItem);
  const change = useSelector((state) => state.change);
  const dispatch = useDispatch();

  const onSubmit = (values, onSubmitProps) => {
    if (values.inputList.length > 0) {
      if (foundItem === null) {
        const { inputList } = values;
        dispatch(addTask({ inputList, id: uuid() }));
        onSubmitProps.resetForm();
      } else {
        const { inputList } = values;
        const { id } = foundItem;
        dispatch(updateTask({ inputList, id }));

        onSubmitProps.resetForm();
      }
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearAll());
  };

  return (
    <>
      <Container>
        <Formik
          initialValues={{ inputList: foundItem ? foundItem.inputList : "" }}
          validationSchema={Yup.object({
            inputList: Yup.string().required("Required"),
          })}
          onSubmit={onSubmit}
          key={foundItem ? foundItem.taskTitle : ""}
        >
          {(formik) => {
            return (
              <Form>
                <InputWrapper>
                  <Head>TODO APP</Head>
                  <Field
                    as={MyInput}
                    type="text"
                    placeholder="ADD YOUR ITEMS"
                    name="inputList"
                    // value={formik.values.inputList}
                  />
                  {/* <Input
                    name="inputList"
                    value={formik.values.inputList}
                    onChange={(e) =>
                      formik.setFieldValue("inputlist", e.target.value)
                    }
                  /> */}
                  <ErrorMessage name="inputList" component={ErrorMsg} />
                </InputWrapper>
                <br></br>

                <Button type="submit">{change ? "UPDATE" : "ADD ITEM"}</Button>

                <Button type="button" onClick={handleClear}>
                  CLEAR ALL
                </Button>
                <Ul>
                  {tasks.length > 0 ? (
                    tasks.map((task) => <TaskList task={task} />)
                  ) : (
                    <NoTaskText>No Tasks Added!</NoTaskText>
                  )}
                </Ul>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};
export default TodoForm;

const Container = styled.div`
  height: 850px;
  width: 600px;
  text-align: center;
  color: white;
  background-color: #353232;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
`;
const Input = styled.input`
  width: 25rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const Button = styled.button`
  background-color: #a91f48;
  margin-right: 1.2rem;
  color: white;
  border-radius: 20px;
  height: 50px;
  border: none;
  width: 120px;
  font-size: 1.2rem;
`;
const Ul = styled.ul`
  list-style: none;
  color: white;
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-left: 0;
`;
const Head = styled.h1`
  font-size: 3.5rem;
  color: white;
  font-weight: 400;
  padding-bottom: 3rem;
  padding-top: 3rem;
`;

const NoTaskText = styled.div`
  margin-top: 10rem;
  font-size: 1.4rem;
`;

const InputWrapper = styled.div`
  text-align: center;
`;
