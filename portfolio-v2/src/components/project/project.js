import "./project.css";

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
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + props.projectImageURL
        })`,
        backgroundRepeat: "no-repeat",
        width: "35%",
        backgroundColor: "lightblue",
        color: "cyan",
      }}
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
