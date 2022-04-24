import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Container, Row } from "react-bootstrap";
import { send } from "emailjs-com";

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Ross",
    message: "",
    reply_to: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  // const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'service_turbnim',
      'template_jcyjo59',
      toSend,
      'yKfX4rf9lbQ1nJQzj'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "reply_to") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
      console.log("Handle Form", toSend);
    }
  };

  return (
    <Container fluid>
      <Row>
        <h2>Contact me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="from_name"
              defaultValue={toSend.from_name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="reply_to"
              defaultValue={toSend.reply_to}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={toSend.message}
              onBlur={handleChange}
              className="col-12"
            />
          </div>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button type="submit">
            Submit
          </button>
        </form>
      </Row>
    </Container>
  );
}

export default ContactForm;
