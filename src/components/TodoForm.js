import React, { useContext } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorMsg from "./ErrorMsg";

const TodoForm = () => {
  const {
    tasks,
    addTask,
    clearAll,
    foundItem,
    editTask,
    change,
    setChange,
    setFoundItem,
  } = useContext(GlobalContext);

  const onSubmit = (values, onSubmitProps) => {
    if (values.inputList.length > 0) {
      if (foundItem === null) {
        addTask(values.inputList);
        onSubmitProps.resetForm();
      } else {
        editTask(values.inputList, foundItem.id);

        setChange(false);
        setFoundItem(null);
        onSubmitProps.resetForm();
      }
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    clearAll();
  };

  return (
    <>
      <Container>
        <Formik
          initialValues={{ inputList: "" }}
          validationSchema={Yup.object({
            inputList: Yup.string().required("Required"),
          })}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <InputWrapper>
                  <Head>TODO APP</Head>
                  <Field
                    as={Input}
                    type="text"
                    placeholder="ADD YOUR ITEMS"
                    name="inputList"
                  />
                  <ErrorMessage name="inputList" component={ErrorMsg} />
                </InputWrapper>
                <br></br>

                <Button type="submit">{change ? "UPDATE" : "ADD ITEM"}</Button>

                <Button type="button" onClick={handleClear}>
                  CLEAR ALL
                </Button>
                <Ul>
                  {tasks.length > 0 ? (
                    tasks.map((task) => (
                      <TaskList task={task} formik={formik} />
                    ))
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
