import "./navbar.css";

const Navbar = (props) => (
  <nav>
    <h1>Charles Kim</h1>
    <div>
      <button onClick={() => props.setPage("about")}>About Me</button>
      <button onClick={() => props.setPage("work")}>Portfolio</button>
      <button onClick={() => props.setPage("contact")}>Contact</button>
      <button onClick={() => props.setPage("resume")}>Resume</button>
    </div>
  </nav>
);

export default Navbar;
