import React, { useState } from "react";
import styles from "./contact.module.css";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: ""
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6a5wsz9",  // Secure credentials
        "template_3ojkc7d",
        formData,
        "dRVjlDtWAZBItS9BS"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Message sent successfully!");
          setFormData({ email: "", phone: "", name: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setSuccess("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Get In Touch</h2>

      <form className={styles.form} onSubmit={sendEmail}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {success && <p className={styles.successMessage}>{success}</p>}

      
    </div>
  );
};

export default ContactForm;
