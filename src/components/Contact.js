import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_USER)
    .then((result) => {
        alert('I will contact you soon!');
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-bg pt-md pb-lg">Contact me</div>
      <div className="contact__content mb-xl pb-xl">
        <h4 className="heading-4 mb-xl">Have a question or want to work together?</h4>
        <form id="contact-form" className="contact__form" onSubmit={sendEmail}>
          <input type="text" className="contact__input mb-md" name="user_name" placeholder="Name" required/>
          <input type="email" className="contact__input mb-xl" name="user_email" placeholder="Enter your email" required/>
          <textarea className="contact__textarea" rows="20" name="message" placeholder="Your Message" required></textarea>
          <input type="submit" value="Submit" className="btn btn-secondary mt-xl mb-xl"/>
        </form>
      </div>
    </section>
  )
}

export default Contact;
