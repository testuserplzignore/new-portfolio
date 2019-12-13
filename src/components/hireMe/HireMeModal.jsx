import React from 'react';

import { ModalBackground, Modal, ModalContents, AnimatedSubmitButton, Form, FormField, FormInput, FormText } from './HireMeStyles';


const MyForm = props => (
  <Form method="POST" action="https://formspree.io/rbrtmorrissey86@gmail.com">
    <FormField>
      <label>Name:</label>
      <FormInput type="text" name="name" placeholder="Your Name" />
    </FormField>
    <FormField>
      <label>Email:</label>
      <FormInput type="email" name="email" placeholder="Your Email" />
    </FormField>
    <FormField>
      <label>Message:</label>
      <FormText name="message" placeholder="Your Message" />
    </FormField>
    <AnimatedSubmitButton>Contact Me</AnimatedSubmitButton>
  </Form>
);

export default ({ active, onClickClose }) => {
  const poseProps = active ? "active" : "hidden";
  return (
    <>
      <ModalBackground onClick={onClickClose} pose={poseProps} />
      <Modal pose={poseProps}>
        <ModalContents>
          <h2>Contact Me</h2>
          <MyForm />
        </ModalContents>
      </Modal>
    </>
  );
};

