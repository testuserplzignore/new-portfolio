import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import axios from "axios";
import * as Yup from "yup";

import {
  ModalBackground,
  Modal,
  ModalContents,
  AnimatedSubmitButton,
  StyledForm,
  FormField,
  FormInput,
  FormText,
  FormErrors
} from "./HireMeStyles";

const FormspeeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Required"),
  name: Yup.string().required("Required"),
  message: Yup.string()
    .min(25, "Please leave a detailed Message")
    .required("Required")
});

const FormikInput = ({ field, form, ...props }) => (
  <FormInput {...field} {...props} />
);

const FormikTextArea = ({ field, form, ...props }) => (
  <FormText {...field} {...props} />
);

const MyForm = () => {
  const [serverState, setServerState] = useState();

  const handleResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  const handleSubmit = async (values, actions) => {
    try{
      const resp = await axios.post(
        "https://formspree.io/arbrtmorrissey86@gmail.com",
        {data: values}
      );
      actions.setSubmitting(false);
      actions.resetForm();
      handleResponse(true, "Thanks!");
    } catch (error) {
      actions.setSubmitting(false);
      handleResponse(false, error.response.data.error);
    }
  }

  console.log(serverState);
  
  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      onSubmit={handleSubmit}
      validationSchema={FormspeeSchema}
    >
      {({ isSubmitting, errors }) => (
        <Form component={StyledForm} noValidate>
          <FormField>
            <label>
              Email <ErrorMessage name="email" component={FormErrors} />
            </label>
            <Field type="email" name="email" component={FormikInput} />
          </FormField>
          <FormField>
            <label>
              Name <ErrorMessage name="name" component={FormErrors} />
            </label>
            <Field type="name" name="name" component={FormikInput} />
          </FormField>
          <FormField>
            <label>
              Message <ErrorMessage name="message" component={FormErrors} />
            </label>
            <Field type="message" name="message" component={FormikTextArea} />
          </FormField>
          <AnimatedSubmitButton type="submit" disabled={isSubmitting}>
            Contact Me
          </AnimatedSubmitButton>
          <p>{serverState ? serverState.msg : "Looking forwards to hearing from you!"}</p>
        </Form>
      )}
    </Formik>
  );
};

export default ({ active, onClickClose }) => {
  const poseProps = active ? "active" : "hidden";
  return (
    <>
      <ModalBackground onClick={onClickClose} pose={poseProps} />
      <Modal pose={poseProps}>
        <ModalContents>
          <h2>Contact Me</h2>
          <MyForm onClickClose={onClickClose} />
        </ModalContents>
      </Modal>
    </>
  );
};

