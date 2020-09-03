import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignInForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "password must be 8 digit")
      .required("Required"),
  });
  const onSubmit = (values) => {};
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Container>
              <Form>
                <Head>TODO APP</Head>
                <Input>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                  />

                  <Error>
                    <ErrorMessage name="email" />
                  </Error>
                </Input>

                <Input>
                  <Label htmlFor="password">Password</Label>
                  <Field type="password" id="password" name="password" />
                  <Error>
                    <ErrorMessage name="password" />
                  </Error>
                </Input>

                <Button>SignIn</Button>
                <Button>SignUp</Button>
              </Form>
            </Container>
          );
        }}
      </Formik>
    </>
  );
}

export default SignInForm;

const Container = styled.div`
  height: 550px;
  width: 400px;
  color: #d5d8dc;
  background-color: #353232;
  margin: 40px auto;
  border-radius: 10px;
`;

const Head = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 3rem;
  padding-top: 3rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  margin: 1rem 0rem;
  font-weight: 600;
`;

const Input = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 7rem;
`;

const Button = styled.button`
  background-color: #a91f48;
  margin-right: 1.2rem;
  color: white;
  border-radius: 10px;
  height: 30px;
  border: none;
  margin: 3rem 3.1rem;
  width: 90px;
  font-size: 1rem;
`;

const Error = styled.div`
  color: red;
`;
