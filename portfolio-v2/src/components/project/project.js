import "./project.css";
import { ReactComponent as Placeholder } from "../../assets/images/portfolioPlaceholder.svg";

// const Project = (props) => {
//   <div id="project">
//     <h1>Project Title: {props.title}</h1>
//     <a href={props.github}>Github</a>
//     <a href={props.deploy}>Deployed Project</a>
//   </div>
// };

function Project(props) {
  return (
    <div
      id="project"
      style={{ backgroundImage: `url(${props.projectImageURL})` }}
    >
      <h1>Project Title: {props.title}</h1>
      <a href={props.github} target="_blank">
        Github
      </a>{" "}
      <br></br>
      <a href={props.deploy} target="_blank">
        Deployed Project
      </a>
    </div>
  );
}

export default Project;
