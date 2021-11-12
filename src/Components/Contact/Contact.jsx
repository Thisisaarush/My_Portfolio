import React from "react";

// formspree
import { useForm, ValidationError } from "@formspree/react";

// style
import {
  ContactBossContainer,
  FormSuccessContainer,
  ContactContainer,
  BackgroundCircles,
  FormContainer,
} from "./Contact.style";

// images
import ContactImage from "../../Resources/Images/hi.png";

// blank space
import BlankSpace from "../BlankSpace/BlankSpace";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbynzdd");

  if (state.succeeded) {
    return (
      <FormSuccessContainer>
        <span className="form-success">
          Thanks for Connecting!
          <span className="asap">Will Get Back to you ASAP</span>
        </span>
      </FormSuccessContainer>
    );
  }

  return (
    <ContactBossContainer id="contact">
      <BlankSpace />
      <ContactContainer>
        <BackgroundCircles>
          <div className="big-circle">
            <div className="medium-circle"></div>
            <div className="regular-circle"></div>
            <div className="small-circle"></div>
          </div>
        </BackgroundCircles>
        <img className="contact-image" src={ContactImage} alt="model" />
        <FormContainer>
          <h2 className="contact-title">Get In Touch</h2>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mzbynzdd"
            method="POST"
            className="contact-form"
          >
            <label htmlFor="name" />
            <input
              className="name"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" />
            <input
              className="email"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" />
            <textarea
              className="message"
              id="message"
              name="message"
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" className="send" disabled={state.submitting}>
              Send
            </button>
          </form>
        </FormContainer>
      </ContactContainer>
    </ContactBossContainer>
  );
};

export default Contact;
