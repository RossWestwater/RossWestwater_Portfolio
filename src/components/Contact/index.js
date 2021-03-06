import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Container, Row, Modal, Button } from "react-bootstrap";
import { send } from "emailjs-com";

function ContactForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Ross",
    message: "",
    reply_to: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toSend.from_name.length === 0 || toSend.message.length === 0 || validateEmail(toSend.reply_to) === false) {
      return
    }
    send("service_turbnim", "template_jcyjo59", toSend, "yKfX4rf9lbQ1nJQzj")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .then(handleShow())
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "reply_to") {
      const isValidEmail = validateEmail(e.target.value);
      if (!isValidEmail) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.id} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
  };

  return (
    <Container fluid>
      <Row>
        <h2 className="mx-2 py-2 bg-light border border-dark center" style={{ borderRadius: "15px" }}>Contact me
          
        </h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="from_name"
              defaultValue={toSend.from_name}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              id="email"
              type="email"
              name="reply_to"
              defaultValue={toSend.reply_to}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              defaultValue={toSend.message}
              onChange={handleChange}
              onBlur={handleChange}
              className="col-12"
            />
          </div>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
        <p>Emails can be sent to me directly at: <a href="mailTo: ross.westwater@gmail.com">ross.westwater@gmail.com</a></p>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will respond to your email shortly. Thank you!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ContactForm;
