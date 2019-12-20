import React, { useState } from 'react';
import uuidv4 from "uuid/v4"

import { ModalBackground, Modal, ModalContents, AnimatedSubmitButton, Form, FormField, FormInput, FormText } from './HireMeStyles';


const MyForm = (props) => {
  const [key, setKey] = useState(uuidv4());

  return (
    <Form
      key={key}
      method="POST"
      action="https://formspree.io/rbrtmorrissey86@gmail.com"
      target="_blank"
      onSubmit={(e) => console.log(e.target.action)}
    >
      <React.Fragment key={key}>
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
      </React.Fragment>
      <AnimatedSubmitButton>Contact Me</AnimatedSubmitButton>
    </Form>
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
          <MyForm />
        </ModalContents>
      </Modal>
    </>
  );
};

