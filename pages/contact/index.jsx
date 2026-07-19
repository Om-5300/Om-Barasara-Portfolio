import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="contact_wrapper">
      <div className="container contact_container">
        <div className="contact_flex_layout">

          {/* 1. LEFT SIDE: Contact Details */}
          <div className="contact_details_section">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 contact_details_title"
            >
              Get in <span className="text-accent">touch.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="contact_details_subtitle"
            >
              Have a project in mind or just want to say hi? Feel free to reach out.
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </motion.p>

            <div className="contact_info_list">
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                className="contact_info_item"
              >
                <div className="contact_info_icon">
                  <HiEnvelope />
                </div>
                <div className="contact_info_text">
                  <span className="contact_info_label">Email</span>
                  <a href="mailto:ombarasara123@gmail.com" className="contact_info_value">ombarasara123@gmail.com</a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("right", 0.7)}
                initial="hidden"
                animate="show"
                className="contact_info_item"
              >
                <div className="contact_info_icon">
                  <HiPhone />
                </div>
                <div className="contact_info_text">
                  <span className="contact_info_label">Phone</span>
                  <a href="tel:+919913335300" className="contact_info_value">+91 99133 35300</a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                animate="show"
                className="contact_info_item"
              >
                <div className="contact_info_icon">
                  <HiMapPin />
                </div>
                <div className="contact_info_text">
                  <span className="contact_info_label">Location</span>
                  <span className="contact_info_value">Ahmedabad, Gujarat, India</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2. RIGHT SIDE: Form */}
          <div className="contact_form_section">
            <motion.form
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="contact_form"
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
              name="contact"
            >
              {/* input group */}
              <div className="contact_input_group">
                <input type="hidden" name="form-name" value="contact" />

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact_input"
                  disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="contact_input"
                  disabled={isLoading}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="contact_input"
                disabled={isLoading}
                required
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="contact_textarea"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                className="contact_btn"
                disabled={isLoading}
              >
                <span className="contact_btn_text">
                  Let's talk
                </span>
                <BsArrowRight className="contact_btn_icon" />
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
