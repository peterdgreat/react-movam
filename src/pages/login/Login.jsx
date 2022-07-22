import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import {
  FormContainer,
  InputContainer,
  LoginContainer,
} from "./Login.style.js";
import InputField from "../../components/InputField/InputField";

const CustomInputField = ({ field, form, ...props }) => {
  const fieldName = field.name;
  const errorMessage = form.errors[fieldName];
  const isTouched = form.touched[fieldName];

  return (
    <InputContainer>
      <InputField
        {...field}
        {...props}
        isError={!!isTouched && !!errorMessage}
        errorMessage={isTouched && errorMessage}
      />
    </InputContainer>
  );
};

export default function Login() {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <div className="row">
        <div className="d-none d-lg-flex col-7 flex-column justify-content-center">
          <h1 class="text-white">Movam</h1>
          <h3 class="welcome-note">Welcome Back !</h3>
          <p class="text-white w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
            consectetur nisi, eu consectetur nisi nisi eu consectetur
            consectetur.
          </p>
        </div>
        <div className="col-12 col-lg-5 d-flex flex-column">
          <FormContainer>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                name: Yup.string().required("Required"),
                password: Yup.string()
                  .matches(
                    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$",
                    "Password must be at least 6 characters, contain at least one number, one uppercase letter, one lowercase letter and one special character"
                  )
                  .min(6, "Must be 6 characters or more")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  navigate("/user", {
                    state: {
                      user: values,
                    },
                  });
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <Field
                  name="name"
                  type="text"
                  label="Your Name"
                  component={CustomInputField}
                />
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  component={CustomInputField}
                />

                <Field
                  name="password"
                  type="password"
                  label="Password"
                  component={CustomInputField}
                />
                <div className="mt-5">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </FormContainer>
        </div>
      </div>
    </LoginContainer>
  );
}
