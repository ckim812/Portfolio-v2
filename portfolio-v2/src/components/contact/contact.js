import "./contact.css";

const Contact = () => (
  <div id="contact">
    <h1>Contact</h1>
    <div>
      <form>
        <ul>
          <li>
            <input placeholder="Name" type="text" name="name" required />
          </li>
          <li>
            <input placeholder="Email" type="email" name="email" required />
            {/* /.+@.+\..+/ */}
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  </div>
);

export default Contact;
