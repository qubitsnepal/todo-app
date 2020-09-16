import React from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask, clearAll } from "../features/todoSlice";

import { Formik, Form, Field, ErrorMessage,FormikHelpers,FieldConfig,FormikProps, } from "formik";
import * as Yup from "yup";
import { ReduxState } from "../store/store"
import ErrorMsg from "./ErrorMsg";
import uuid from "react-uuid";
import { Task as TaskType } from "../types/Types";


interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "form"
  > {
  field?: FieldConfig
  form?: FormikProps<any>
  foundItem:TaskType
  inputList:TaskType
  taskTitle:string
}

const MyInput = (props: InputProps) => {
  const { field, ...restProps } = props

  // @ts-ignore

  return <Input {...field} {...restProps} />
}

const TodoForm:React.FC= () => {
  const tasks = useSelector((state : ReduxState) => state.todo.tasks);

  const foundItem = useSelector((state : ReduxState) => state.todo.foundItem);
  const change = useSelector((state : ReduxState) => state.todo.change);
  const dispatch = useDispatch();

  const initialValues = { inputList: foundItem ? foundItem.inputList : "" }

  const onSubmit = (
    values: typeof initialValues,
    onSubmitProps: FormikHelpers<typeof initialValues>,
  )=> {
    if (values.inputList.length > 0) {
      if (foundItem === null) {
        const { inputList } = values;
        dispatch(addTask({ inputList, id: uuid() }));
        onSubmitProps.resetForm();
      } else {
        const { inputList } = values
        const { id } = (foundItem as TaskType)   // foundItem
        dispatch(updateTask({ inputList, id }));

        onSubmitProps.resetForm();
      }
    }
  };
  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(clearAll())
  }

  return (
    <>
      <Container>
        <Formik
          initialValues={{ inputList: foundItem ? foundItem.inputList : "" }}
          validationSchema={Yup.object({
            inputList: Yup.string().required("Required"),
          })}
          onSubmit={onSubmit}
          key={foundItem ? foundItem.inputList : ""}
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
                    autoComplete="off"
                  />
  
                  <ErrorMessage
                    name="inputList"
                    render={(errorMessage) => (
                      <ErrorMsg>{errorMessage}</ErrorMsg>
                    )}
                  /> 
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


export default TodoForm;