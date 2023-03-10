import "./contact.css";
import React from "react";
import { useFormik } from "formik";

const validateContact = (contactData) => {
  const errors = {};

  if (!contactData.Name) {
    errors.Name = "Please enter your name.";
  } else if (contactData.Name.length > 20) {
    errors.Name = "Name cannot exceed 20 characters";
  }

  if (!contactData.Email) {
    errors.Email = "Please enter a valid email.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.Email)
  ) {
    errors.Email = "Invalid email address";
  }

  if (!contactData.Message) {
    errors.Message = "Please write a message.";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Message: "",
    },
    validate: validateContact,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="container">
      <h2>Contact Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <p>
          <label htmlFor="Name">Name : </label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.Name && formik.errors.Name ? (
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
          ) : null}
        </p>
        <p>
          <label htmlFor="Email">Email : </label>
          <input
            type="text"
            name="Email"
            id="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.Email && formik.errors.Email ? (
            <span style={{ color: "red" }}>{formik.errors.Email}</span>
          ) : null}
        </p>
        <p>
          <label htmlFor="Message">Message : </label>
          <textarea
            type="text"
            name="Message"
            id="Message"
            value={formik.values.Message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.Message && formik.errors.Message ? (
            <span style={{ color: "red" }}>{formik.errors.Message}</span>
          ) : null}
        </p>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Contact;
