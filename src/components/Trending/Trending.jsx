import React from "react";
import "./Trending.css";
import ProgramsCard from "../Ui/ProgramsCard/ProgramsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Trending() {
  return (
    <section id="trending">
      <div className="row">
        <div className="trending__title">
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
    </section>
  );
}

export default Trending;
