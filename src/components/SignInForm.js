import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "password must be 8 digit")
    .required("Required"),
});
const onSubmit = (values) => {
  console.log("form data:", values);
};
const initialValues = {
  email: "",
  password: "",
};
function SignInForm() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Container>
              <form onSubmit={formik.handleSubmit}>
                <Head>TODO APP</Head>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email ? (
                  <Error>{formik.errors.email}</Error>
                ) : null}
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password ? (
                  <Error>{formik.errors.password}</Error>
                ) : null}

                <Button type="submit">SignIn</Button>
                {/* <Button>SignUp</Button> */}
              </form>
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
  margin-left: 3rem;
  font-weight: 500;
`;
const Input = styled.input`
  width: 18rem;
  height: 2.5rem;
  background: #f7f9f9;
  border-radius: 4px;
  border: none;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 3rem;
`;
const Button = styled.button`
  background-color: #a91f48;
  margin-right: 1.2rem;
  color: white;
  border-radius: 10px;
  height: 40px;
  border: none;
  margin: 3rem 2.5rem;
  width: 120px;
  font-size: 1.2rem;
`;
const Error = styled.div`
  margin: 0rem 5rem;
  color: red;
`;
