import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div id="footer">
    <a href="http://www.github.com" target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={faGithub}
        color="#4d4d4e"
        className="anchor-icon"
      />
    </a>
    <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={faLinkedin}
        color="#4d4d4e"
        className="anchor-icon"
      />
    </a>
    <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={faYoutube}
        color="#4d4d4e"
        className="anchor-icon"
      />
    </a>
  </div>
);

export default Footer;
