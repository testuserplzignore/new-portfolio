import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import axios from "axios";

import { ModalBackground, Modal, ModalContents, AnimatedSubmitButton, StyledForm, FormField, FormInput, FormText } from './HireMeStyles';

const FormikInput = ({ field, form, ...props }) => (
  <FormInput {...field} {...props} />
);

const FormikTextArea = ({ field, form, ...props }) => (
  <FormText {...field} {...props} />
);

const MyForm = (props) => {
  const [serverState, setServerState] = useState();

  const handleResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  const handleSubmit = async (values, actions) => {
    console.log(actions, values);
    try{
      const resp = await axios.post(
        "https://formspree.io/rbrtmorrissey86@gmail.com",
        {data: values}
      );
      console.log(resp);
      actions.setSubmitting(false);
      actions.resetForm();
      handleResponse(true, "Thanks!");
    } catch (error) {
      actions.setSubmitting(false);
      handleResponse(false, error.response.data.error);
    }
  }


  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form component={StyledForm} noValidate>
          <FormField>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              component={FormikInput}
            />
          </FormField>
          <FormField>
            <label>Name</label>
            <Field
              type="name"
              name="name"
              component={FormikInput}
            />
          </FormField>
          <FormField>
            <label>Message</label>
            <Field
              type="message"
              name="message"
              component={FormikTextArea}
            />
          </FormField>
          <AnimatedSubmitButton type="submit" disabled={isSubmitting}>
            Contact Me
          </AnimatedSubmitButton>
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

