import "./work.css";
import Project from "../project";

const Work = () => (
  <div id="work">
    <h1>Work</h1>
    <Project
      title="Neighborhood Garage"
      github="https://github.com/JICAalliance/neighborhood-garage/"
      deploy="https://neighborhood-garage.herokuapp.com/"
      projectImageURL="/assets/img/neighborhoodGarageSignup.png"
    />
    <Project
      title="Random Madlib"
      github="https://github.com/TheIncredibleHulkSmash/RandomMadlib"
      deploy="https://theincrediblehulksmash.github.io/RandomMadlib/"
      projectImageURL="/assets/img/previewRandomMadlib.png"
    />
    <Project
      title="Weather Dashboard"
      github="https://github.com/ckim812/weatherDashboard/"
      deploy="https://ckim812.github.io/weatherDashboard"
      projectImageURL="/assets/img/previewWeatherDashboard.png"
    />
    <Project
      title="Work Day Scheduler"
      github="https://github.com/ckim812/workDayScheduler/"
      deploy="https://ckim812.github.io/workDayScheduler/"
      projectImageURL="/assets/img/previewWorkDayScheduler.png"
    />
    <Project
      title="Code Quiz"
      github="https://github.com/ckim812/Code-Quiz/"
      deploy="https://ckim812.github.io/Code-Quiz/"
      projectImageURL="/assets/img/previewCodeQuiz.png"
    />
    <Project
      title="Password Generator"
      github="https://github.com/ckim812/Password-Generator/"
      deploy="https://ckim812.github.io/Password-Generator/"
      projectImageURL="/assets/img/previewPasswordGenerator.png"
    />
    <Project
      title="Code Refactoring"
      github="https://github.com/ckim812/01-HTML-Git-CSS--Sprint-1-Challenge-Refactoring/"
      deploy="https://ckim812.github.io/01-HTML-Git-CSS--Sprint-1-Challenge-Refactoring/"
      projectImageURL="/assets/img/previewCodeRefactoring.png"
    />
  </div>
);

export default Work;
