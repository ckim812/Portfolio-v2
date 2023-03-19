import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => (
  <nav>
    <div className="nav-bar">
      <Link className="header-name" to="/">
        <h1>Charles Kim</h1>
      </Link>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/"
      >
        {/* <button onClick={() => props.setPage("about")}>About Me</button> */}
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" className="headerIcon" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="work-link"
        to="/work"
      >
        {/* <button onClick={() => props.setPage("work")}>Portfolio</button> */}
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" className="headerIcon" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        {/* <button onClick={() => props.setPage("contact")}>Contact</button> */}
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className="headerIcon" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="resume-link"
        to="/resume"
      >
        {/* <button onClick={() => props.setPage("resume")}>Resume</button> */}
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" className="headerIcon" />
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
