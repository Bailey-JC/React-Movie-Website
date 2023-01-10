import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProgramsCard from "../ProgramsCard/ProgramsCard";
import "./Program.css";

function Program() {
  return (
    <>
      <div className="row">
        <div className="programs__title">
          <h2>Trending on Stan</h2>
          <FontAwesomeIcon
            icon="fa-solid fa-angle-right"
            className="trending__arrowRight"
          />
        </div>
        <div className="movie__list">
          <ProgramsCard />
          <ProgramsCard />
          <ProgramsCard />
          <ProgramsCard />
          <ProgramsCard />
          <ProgramsCard />
        </div>
      </div>
    </>
  );
}

export default Program;
