import "./work.css";
import Project from "../project";

const Work = () => (
  <div id="work">
    <h1>Work</h1>
    <Project
      title="Random Madlib"
      github="https://theincrediblehulksmash.github.io/RandomMadlib/"
      deploy="https://www.google.com"
      projectImageURL="/assets/img/previewRandomMadlib.png"
    />
    <Project
      title="Weather Dashboard"
      github="https://ckim812.github.io/weatherDashboard/"
      deploy="https://www.google.com"
      projectImageURL="/assets/img/previewWeatherDashboard.png"
    />
    <Project
      title="Work Day Scheduler"
      github="https://ckim812.github.io/workDayScheduler/"
      deploy="https://www.google.com"
      projectImageURL="/assets/img/previewWorkDayScheduler.png"
    />
    <Project
      title="Code Quiz"
      github="https://ckim812.github.io/Code-Quiz/"
      deploy="https://www.google.com"
      projectImageURL="/assets/img/previewCodeQuiz.png"
    />
    <Project
      title="Password Generator"
      github="https://ckim812.github.io/Password-Generator/"
      deploy="https://www.google.com"
      projectImageURL="/assets/img/previewPasswordGenerator.png"
    />
    <Project
      title="Code Refactoring"
      github="https://ckim812.github.io/01-HTML-Git-CSS--Sprint-1-Challenge-Refactoring/"
      deploy="https://www.google.com"
      projectImageURL="/assets/img/previewCodeRefactoring.png"
    />
  </div>
);

export default Work;
