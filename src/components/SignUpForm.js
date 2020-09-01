import React from "react";
import ErrorMsg from "./ErrorMsg";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const onSubmit = (values, onSubmitProps) => {
  alert(JSON.stringify(values, null, 2));
  onSubmitProps.setSubmitting(false);
};

const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Container>
              <Head>TODO APP</Head>
              <Form>
                <Input>
                  <Label htmlFor="fullName">First Name</Label>

                  <Field
                    name="fullName"
                    type="text"
                    as={MyStyledInput}
                    placeholder="Enter FullName"
                  />
                  <ErrorMessage name="fullName" component={ErrorMsg} />
                </Input>
                <Input>
                  <Label htmlFor="email">Email Address</Label>

                  <Field
                    name="email"
                    type="email"
                    as={MyStyledInput}
                    placeholder="Enter Email"
                  />

                  <ErrorMessage name="email" component={ErrorMsg} />
                </Input>
                <Input>
                  <Label htmlFor="password">Password</Label>

                  <Field
                    name="password"
                    type="password"
                    as={MyStyledInput}
                    placeholder="Enter new Password"
                  />

                  <ErrorMessage name="password" component={ErrorMsg} />
                </Input>
                <Input>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>

                  <Field
                    name="confirmPassword"
                    type="password"
                    as={MyStyledInput}
                    placeholder="Enter password again"
                  />

                  <ErrorMessage name="confirmPassword" component={ErrorMsg} />
                </Input>

                <Button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  SignUp
                </Button>
              </Form>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
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
const Input = styled.div`
  display: flex;

  align-items: flex-start;
  flex-direction: column;
  margin-top: 3rem;
  padding-left: 10rem;
`;
const Head = styled.h1`
  padding-top: 4rem;
  font-size: 3.5rem;
`;
const MyStyledInput = styled.input`
  width: 70%;
  height: 40px;
`;
const Label = styled.label`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  width: 52%;
  margin-left: 2rem;
  margin-top: 3rem;
  height: 50px;
  border-radius: 20px;
  background-color: #a91f48;
  color: white;
  font-size: 1.5rem;
  border: none;
`;
