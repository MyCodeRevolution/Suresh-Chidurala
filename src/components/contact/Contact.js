import React from 'react';
import emailjs from 'emailjs-com';

import contactData from '../../data/data.json';
const contact_data = contactData[4].social_media;

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jbfqta7',
        'template_t9m15q1',
        e.target,
        'user_ywD2Z989qVuUvosChbaGe'
      )
      .then(
        (result) => {
          alert('Your mail sent Successfully');
          e.target.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>My Address</h3>
              <a
                href="https://www.google.com/maps/place/2-85+Sravani+Saree+store+(PRABHAKAR+NILAYAM)/@17.6582665,79.3892114,14.54z/data=!4m8!1m2!2m1!1ssravani+cloth+store+thorrur+palakurthy+jangoan!3m4!1s0x0:0xf0ba28b6ea2064d3!8m2!3d17.6690887!4d79.3806814"
                target="_blank"
                rel="noreferrer"
              >
                <p>Hyderabad, India</p>
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                {contact_data.map((contact) => (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noreferrer"
                    key={contact.link}
                  >
                    <i className={contact.font}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>
                <a
                  style={{color: 'white'}}
                  href="mailto:suryachidurala123@gmail.com"
                >
                  suryachidurala123@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>
                +91
                <a style={{color: 'white'}} href="tel:+918639193040">
                  8639193040
                </a>
              </p>
            </div>
          </div>
        </div>
        <form
          action="forms/contact.html"
          method="post"
          className="php-email-form mt-4"
          onSubmit={sendEmail}
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              data-rule="minlen:4"
              data-msg="Please enter at least 8 chars of subject"
            />
            <div className="validate"></div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="5"
              data-rule="required"
              data-msg="Please write something for us"
              placeholder="Message"
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
